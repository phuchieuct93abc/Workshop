package com.axonactive.workshop.component.backend.solution.Concurrency;

/**
 */
@SuppressWarnings("all")
@javax.annotation.Generated(comments="This is the java file of the ivy data class ConcurrencyData", value={"ch.ivyteam.ivy.scripting.streamInOut.IvyScriptJavaClassBuilder"})
public class ConcurrencyData extends ch.ivyteam.ivy.scripting.objects.CompositeObject
{
  /** SerialVersionUID */
  private static final long serialVersionUID = -7107144292693069196L;

  private java.lang.String serviceId;

  /**
   * Gets the field serviceId.
   * @return the value of the field serviceId; may be null.
   */
  public java.lang.String getServiceId()
  {
    return serviceId;
  }

  /**
   * Sets the field serviceId.
   * @param _serviceId the new value of the field serviceId.
   */
  public void setServiceId(java.lang.String _serviceId)
  {
    serviceId = _serviceId;
  }

  private java.lang.Long totalTime;

  /**
   * Gets the field totalTime.
   * @return the value of the field totalTime; may be null.
   */
  public java.lang.Long getTotalTime()
  {
    return totalTime;
  }

  /**
   * Sets the field totalTime.
   * @param _totalTime the new value of the field totalTime.
   */
  public void setTotalTime(java.lang.Long _totalTime)
  {
    totalTime = _totalTime;
  }

  private java.lang.String result;

  /**
   * Gets the field result.
   * @return the value of the field result; may be null.
   */
  public java.lang.String getResult()
  {
    return result;
  }

  /**
   * Sets the field result.
   * @param _result the new value of the field result.
   */
  public void setResult(java.lang.String _result)
  {
    result = _result;
  }

  private java.lang.String jsonPath;

  /**
   * Gets the field jsonPath.
   * @return the value of the field jsonPath; may be null.
   */
  public java.lang.String getJsonPath()
  {
    return jsonPath;
  }

  /**
   * Sets the field jsonPath.
   * @param _jsonPath the new value of the field jsonPath.
   */
  public void setJsonPath(java.lang.String _jsonPath)
  {
    jsonPath = _jsonPath;
  }

  private java.lang.String age;

  /**
   * Gets the field age.
   * @return the value of the field age; may be null.
   */
  public java.lang.String getAge()
  {
    return age;
  }

  /**
   * Sets the field age.
   * @param _age the new value of the field age.
   */
  public void setAge(java.lang.String _age)
  {
    age = _age;
  }

  private java.util.List<com.axonactive.workshop.backend.solution.concurrency.bestpractice.ServiceType> services;

  /**
   * Gets the field services.
   * @return the value of the field services; may be null.
   */
  public java.util.List<com.axonactive.workshop.backend.solution.concurrency.bestpractice.ServiceType> getServices()
  {
    return services;
  }

  /**
   * Sets the field services.
   * @param _services the new value of the field services.
   */
  public void setServices(java.util.List<com.axonactive.workshop.backend.solution.concurrency.bestpractice.ServiceType> _services)
  {
    services = _services;
  }

}
