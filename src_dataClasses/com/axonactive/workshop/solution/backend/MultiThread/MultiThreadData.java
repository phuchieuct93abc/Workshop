package com.axonactive.workshop.solution.backend.MultiThread;

/**
 */
@SuppressWarnings("all")
@javax.annotation.Generated(comments="This is the java file of the ivy data class MultiThreadData", value={"ch.ivyteam.ivy.scripting.streamInOut.IvyScriptJavaClassBuilder"})
public class MultiThreadData extends ch.ivyteam.ivy.scripting.objects.CompositeObject
{
  /** SerialVersionUID */
  private static final long serialVersionUID = -5732438233621087290L;

  private com.axonactive.workshop.backend.concurrency.rest.Person person;

  /**
   * Gets the field person.
   * @return the value of the field person; may be null.
   */
  public com.axonactive.workshop.backend.concurrency.rest.Person getPerson()
  {
    return person;
  }

  /**
   * Sets the field person.
   * @param _person the new value of the field person.
   */
  public void setPerson(com.axonactive.workshop.backend.concurrency.rest.Person _person)
  {
    person = _person;
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

}
