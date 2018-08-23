package com.axonactive.workshop.market.Market;

/**
 */
@SuppressWarnings("all")
@javax.annotation.Generated(comments="This is the java file of the ivy data class MarketData", value={"ch.ivyteam.ivy.scripting.streamInOut.IvyScriptJavaClassBuilder"})
public class MarketData extends ch.ivyteam.ivy.scripting.objects.CompositeObject
{
  /** SerialVersionUID */
  private static final long serialVersionUID = -2970088195245216739L;

  private ch.ivyteam.ivy.scripting.objects.List<com.axonactive.workshop.market.Stock> stocks;

  /**
   * Gets the field stocks.
   * @return the value of the field stocks; may be null.
   */
  public ch.ivyteam.ivy.scripting.objects.List<com.axonactive.workshop.market.Stock> getStocks()
  {
    return stocks;
  }

  /**
   * Sets the field stocks.
   * @param _stocks the new value of the field stocks.
   */
  public void setStocks(ch.ivyteam.ivy.scripting.objects.List<com.axonactive.workshop.market.Stock> _stocks)
  {
    stocks = _stocks;
  }

}
