export default function CircleNav(props) {
  const { serviceName } = props;

  return (
    <>
      <div className="service-smallNavWrapper">
        <a id="nav-data"
            href="#Data"
            className={serviceName === "Data" ? "service-nav active" : "service-nav"}>
        </a>
        <a id="nav-web"
            href="#Web"
            className={serviceName === "Web" ? "service-nav active" : "service-nav"}>    
        </a>
        <a id="nav-prototyping"
            href="#Prototyping"
          className={serviceName === "Prototyping" ? "service-nav active" : "service-nav"}>
        </a>
        <a id="nav-shopify"
            href="#Shopify"
            className={serviceName === "Shopify" ? "service-nav active" : "service-nav"}>
        </a>
      </div>
    </>
  );
}
