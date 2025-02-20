import styles from "./index.module.css";
import { useEffect, useRef } from "react";
import {
  TradingTerminalWidgetOptions,
  ChartingLibraryWidgetOptions,
  LanguageCode,
  ResolutionString,
  widget,
} from "@/public/static/charting_library";
import Datafeed from "@/src/integrations/trading-view/datafeed";
// import { BotDeal, BotDealOrder } from "@/hooks/fetchRequests";

type Props = {
  props: Partial<ChartingLibraryWidgetOptions>;
  data: any;
  orders: any;
};

export const TVChartContainer = ({ props, data, orders }: Props) => {
  const chartContainerRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const widgetOptions:
      | ChartingLibraryWidgetOptions
      | TradingTerminalWidgetOptions = {
      symbol: props.symbol,
      theme: props.theme,
      // BEWARE: no trailing slash is expected in feed URL
      datafeed: Datafeed as any,
      interval: props.interval as ResolutionString,
      container: chartContainerRef.current,
      library_path: props.library_path,
      locale: props.locale as LanguageCode,
      disabled_features: ["use_localstorage_for_settings"],
      enabled_features: ["study_templates"],
      charts_storage_url: props.charts_storage_url,
      charts_storage_api_version: props.charts_storage_api_version,
      client_id: props.client_id,
      user_id: props.user_id,
      fullscreen: props.fullscreen,
      autosize: props.autosize,
      debug: props.debug,
      // trading_customization: {
      //   position: {
      //     quantityTextColor: "rgb(255,192,203)",
      //     lineBuyColor: "rgb(252,109,38)",
      //   },
      //   order: {
      //     lineActiveBuyColor: "rgb(22,160,133)",
      //     quantityTextColor: "rgb(55,192,203)",
      //   },
      // },
    };

    const tvWidget = new widget(widgetOptions);

    tvWidget.onChartReady(() => {
      const dealFinished = data["finished?"];
      const takeProfitPrice = Number(data?.take_profit_price).toFixed(2);
      const takeProfitActive = data?.crypto_widget.TTPАctivated;
      const amountBought = data?.bought_amount;
      const buyPrice = Number(data?.bought_average_price).toFixed(2);

      tvWidget
        .chart()
        .createPositionLine()
        .setBodyBackgroundColor("rgba(255, 255, 255, 0)")
        .setBodyBorderColor("rgb(22,160,133)")
        .setLineColor("rgb(22,160,133)")
        .setBodyTextColor("rgb(22,160,133)")
        .setQuantityBackgroundColor("rgb(22,160,133)")
        .setQuantityBorderColor("rgb(22,160,133)")
        .setQuantity(amountBought)
        .setPrice(Number(takeProfitPrice))
        .setText(`Take Profit ${takeProfitActive ? "" : "(Untrigerred)"}`);

      // Create position line
      tvWidget
        .chart()
        .createPositionLine()
        .setBodyBackgroundColor("rgba(255, 255, 255, 0)")
        .setBodyBorderColor("rgb(252,109,38)")
        .setLineColor("rgb(252,109,38)")
        .setBodyTextColor("rgb(252,109,38)")
        .setQuantityBackgroundColor("rgb(252,109,38)")
        .setQuantityBorderColor("rgb(252,109,38)")
        .setQuantity(amountBought)
        .setPrice(Number(buyPrice))
        .setText("Avg. Buy Price");

      // Create Arrow up
      orders.forEach((order: any) => {
        tvWidget.chart().createShape(
          {
            time: new Date(order.created_at).getTime(),
            price: parseInt(order.rate),
          },
          {
            shape: order.order_type === "BUY" ? "arrow_up" : "arrow_down",
            text: order.order_type === "BUY" ? "Bought" : "Sold",
          }
        );
      });
    });

    return () => {
      tvWidget.remove();
    };
  }, [props, data]);

  return (
    <>
      {/* <header className={styles.VersionHeader}>
        <h1>TradingView Charting Library and Next.js Integration Example</h1>
      </header> */}
      <div ref={chartContainerRef} className={styles.TVChartContainer} />
    </>
  );
};
