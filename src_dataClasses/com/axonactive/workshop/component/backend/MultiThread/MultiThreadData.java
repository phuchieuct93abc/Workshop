package com.axonactive.workshop.component.backend.MultiThread;

/**
 */
@SuppressWarnings("all")
@javax.annotation.Generated(comments="This is the java file of the ivy data class MultiThreadData", value={"ch.ivyteam.ivy.scripting.streamInOut.IvyScriptJavaClassBuilder"})
public class MultiThreadData extends ch.ivyteam.ivy.scripting.objects.CompositeObject
{
  /** SerialVersionUID */
  private static final long serialVersionUID = 7607112412755692138L;

  private com.axonactive.workshop.backend.concurrency.rest.PersonalInformation personalInformation;

  /**
   * Gets the field personalInformation.
   * @return the value of the field personalInformation; may be null.
   */
  public com.axonactive.workshop.backend.concurrency.rest.PersonalInformation getPersonalInformation()
  {
    return personalInformation;
  }

  /**
   * Sets the field personalInformation.
   * @param _personalInformation the new value of the field personalInformation.
   */
  public void setPersonalInformation(com.axonactive.workshop.backend.concurrency.rest.PersonalInformation _personalInformation)
  {
    personalInformation = _personalInformation;
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

  private java.util.List<java.lang.String> personIds;

  /**
   * Gets the field personIds.
   * @return the value of the field personIds; may be null.
   */
  public java.util.List<java.lang.String> getPersonIds()
  {
    return personIds;
  }

  /**
   * Sets the field personIds.
   * @param _personIds the new value of the field personIds.
   */
  public void setPersonIds(java.util.List<java.lang.String> _personIds)
  {
    personIds = _personIds;
  }

  private java.lang.String selectedId;

  /**
   * Gets the field selectedId.
   * @return the value of the field selectedId; may be null.
   */
  public java.lang.String getSelectedId()
  {
    return selectedId;
  }

  /**
   * Sets the field selectedId.
   * @param _selectedId the new value of the field selectedId.
   */
  public void setSelectedId(java.lang.String _selectedId)
  {
    selectedId = _selectedId;
  }

}
