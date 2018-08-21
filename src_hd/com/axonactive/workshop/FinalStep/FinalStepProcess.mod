[Ivy]
165361E2FC7F67F5 3.20 #module
>Proto >Proto Collection #zClass
Fs0 FinalStepProcess Big #zClass
Fs0 RD #cInfo
Fs0 #process
Fs0 @TextInP .ui2RdDataAction .ui2RdDataAction #zField
Fs0 @TextInP .rdData2UIAction .rdData2UIAction #zField
Fs0 @TextInP .resExport .resExport #zField
Fs0 @TextInP .type .type #zField
Fs0 @TextInP .processKind .processKind #zField
Fs0 @AnnotationInP-0n ai ai #zField
Fs0 @MessageFlowInP-0n messageIn messageIn #zField
Fs0 @MessageFlowOutP-0n messageOut messageOut #zField
Fs0 @TextInP .xml .xml #zField
Fs0 @TextInP .responsibility .responsibility #zField
Fs0 @RichDialogInitStart f0 '' #zField
Fs0 @RichDialogProcessEnd f1 '' #zField
Fs0 @PushWFArc f2 '' #zField
Fs0 @RichDialogProcessStart f3 '' #zField
Fs0 @RichDialogEnd f4 '' #zField
Fs0 @PushWFArc f5 '' #zField
Fs0 @RichDialogProcessStart f6 '' #zField
Fs0 @RichDialogEnd f7 '' #zField
Fs0 @GridStep f9 '' #zField
Fs0 @PushWFArc f10 '' #zField
Fs0 @PushWFArc f8 '' #zField
>Proto Fs0 Fs0 FinalStepProcess #zField
Fs0 f0 guid 165361E2FE653B3D #txt
Fs0 f0 type com.axonactive.workshop.FinalStep.FinalStepData #txt
Fs0 f0 method start(com.axonactive.workshop.CacheProcess) #txt
Fs0 f0 disableUIEvents true #txt
Fs0 f0 inParameterDecl 'ch.ivyteam.ivy.richdialog.exec.RdMethodCallEvent methodEvent = event as ch.ivyteam.ivy.richdialog.exec.RdMethodCallEvent;
<com.axonactive.workshop.CacheProcess cacheProcess> param = methodEvent.getInputArguments();
' #txt
Fs0 f0 inParameterMapAction 'out.cacheProcess=param.cacheProcess;
' #txt
Fs0 f0 outParameterDecl '<com.axonactive.workshop.CacheProcess cacheProcess> result;
' #txt
Fs0 f0 outParameterMapAction 'result.cacheProcess=in.cacheProcess;
' #txt
Fs0 f0 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>start(CacheProcess)</name>
    </language>
</elementInfo>
' #txt
Fs0 f0 83 51 26 26 -57 15 #rect
Fs0 f0 @|RichDialogInitStartIcon #fIcon
Fs0 f1 type com.axonactive.workshop.FinalStep.FinalStepData #txt
Fs0 f1 211 51 26 26 0 12 #rect
Fs0 f1 @|RichDialogProcessEndIcon #fIcon
Fs0 f2 expr out #txt
Fs0 f2 109 64 211 64 #arcP
Fs0 f3 guid 165361E2FF98A143 #txt
Fs0 f3 type com.axonactive.workshop.FinalStep.FinalStepData #txt
Fs0 f3 actionDecl 'com.axonactive.workshop.FinalStep.FinalStepData out;
' #txt
Fs0 f3 actionTable 'out=in;
' #txt
Fs0 f3 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>close</name>
    </language>
</elementInfo>
' #txt
Fs0 f3 83 147 26 26 -15 12 #rect
Fs0 f3 @|RichDialogProcessStartIcon #fIcon
Fs0 f4 type com.axonactive.workshop.FinalStep.FinalStepData #txt
Fs0 f4 guid 165361E2FF915159 #txt
Fs0 f4 211 147 26 26 0 12 #rect
Fs0 f4 @|RichDialogEndIcon #fIcon
Fs0 f5 expr out #txt
Fs0 f5 109 160 211 160 #arcP
Fs0 f6 guid 1653622D29DD5F01 #txt
Fs0 f6 type com.axonactive.workshop.FinalStep.FinalStepData #txt
Fs0 f6 actionDecl 'com.axonactive.workshop.FinalStep.FinalStepData out;
' #txt
Fs0 f6 actionTable 'out=in;
' #txt
Fs0 f6 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>back</name>
        <nameStyle>4,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Fs0 f6 83 275 26 26 -13 15 #rect
Fs0 f6 @|RichDialogProcessStartIcon #fIcon
Fs0 f7 type com.axonactive.workshop.FinalStep.FinalStepData #txt
Fs0 f7 guid 1653622EB9E9E48D #txt
Fs0 f7 339 275 26 26 0 12 #rect
Fs0 f7 @|RichDialogEndIcon #fIcon
Fs0 f9 actionDecl 'com.axonactive.workshop.FinalStep.FinalStepData out;
' #txt
Fs0 f9 actionTable 'out=in;
' #txt
Fs0 f9 actionCode 'in.cacheProcess.needToReview = true;' #txt
Fs0 f9 type com.axonactive.workshop.FinalStep.FinalStepData #txt
Fs0 f9 168 266 112 44 0 -8 #rect
Fs0 f9 @|StepIcon #fIcon
Fs0 f10 expr out #txt
Fs0 f10 109 288 168 288 #arcP
Fs0 f8 expr out #txt
Fs0 f8 280 288 339 288 #arcP
>Proto Fs0 .type com.axonactive.workshop.FinalStep.FinalStepData #txt
>Proto Fs0 .processKind HTML_DIALOG #txt
>Proto Fs0 -8 -8 16 16 16 26 #rect
>Proto Fs0 '' #fIcon
Fs0 f0 mainOut f2 tail #connect
Fs0 f2 head f1 mainIn #connect
Fs0 f3 mainOut f5 tail #connect
Fs0 f5 head f4 mainIn #connect
Fs0 f6 mainOut f10 tail #connect
Fs0 f10 head f9 mainIn #connect
Fs0 f9 mainOut f8 tail #connect
Fs0 f8 head f7 mainIn #connect
