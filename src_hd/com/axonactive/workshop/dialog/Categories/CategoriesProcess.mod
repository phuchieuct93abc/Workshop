[Ivy]
1651CE9E96834445 3.20 #module
>Proto >Proto Collection #zClass
Cs0 CategoriesProcess Big #zClass
Cs0 RD #cInfo
Cs0 #process
Cs0 @TextInP .ui2RdDataAction .ui2RdDataAction #zField
Cs0 @TextInP .rdData2UIAction .rdData2UIAction #zField
Cs0 @TextInP .resExport .resExport #zField
Cs0 @TextInP .type .type #zField
Cs0 @TextInP .processKind .processKind #zField
Cs0 @AnnotationInP-0n ai ai #zField
Cs0 @MessageFlowInP-0n messageIn messageIn #zField
Cs0 @MessageFlowOutP-0n messageOut messageOut #zField
Cs0 @TextInP .xml .xml #zField
Cs0 @TextInP .responsibility .responsibility #zField
Cs0 @RichDialogInitStart f0 '' #zField
Cs0 @RichDialogProcessEnd f1 '' #zField
Cs0 @RichDialogProcessStart f3 '' #zField
Cs0 @RichDialogEnd f4 '' #zField
Cs0 @PushWFArc f5 '' #zField
Cs0 @GridStep f6 '' #zField
Cs0 @PushWFArc f7 '' #zField
Cs0 @PushWFArc f2 '' #zField
>Proto Cs0 Cs0 CategoriesProcess #zField
Cs0 f0 guid 1651CE9E98113007 #txt
Cs0 f0 type com.axonactive.workshop.dialog.Categories.CategoriesData #txt
Cs0 f0 method start(com.axonactive.workshop.CacheProcess) #txt
Cs0 f0 disableUIEvents true #txt
Cs0 f0 inParameterDecl 'ch.ivyteam.ivy.richdialog.exec.RdMethodCallEvent methodEvent = event as ch.ivyteam.ivy.richdialog.exec.RdMethodCallEvent;
<com.axonactive.workshop.CacheProcess cacheProcess> param = methodEvent.getInputArguments();
' #txt
Cs0 f0 inParameterMapAction 'out.cacheProcess=param.cacheProcess;
' #txt
Cs0 f0 outParameterDecl '<com.axonactive.workshop.CacheProcess cacheProcess> result;
' #txt
Cs0 f0 outParameterMapAction 'result.cacheProcess=in.cacheProcess;
' #txt
Cs0 f0 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>start(CacheProcess)</name>
    </language>
</elementInfo>
' #txt
Cs0 f0 83 51 26 26 -57 15 #rect
Cs0 f0 @|RichDialogInitStartIcon #fIcon
Cs0 f1 type com.axonactive.workshop.dialog.Categories.CategoriesData #txt
Cs0 f1 339 51 26 26 0 12 #rect
Cs0 f1 @|RichDialogProcessEndIcon #fIcon
Cs0 f3 guid 1651CE9E992C59FA #txt
Cs0 f3 type com.axonactive.workshop.dialog.Categories.CategoriesData #txt
Cs0 f3 actionDecl 'com.axonactive.workshop.dialog.Categories.CategoriesData out;
' #txt
Cs0 f3 actionTable 'out=in;
' #txt
Cs0 f3 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>close</name>
    </language>
</elementInfo>
' #txt
Cs0 f3 83 147 26 26 -15 12 #rect
Cs0 f3 @|RichDialogProcessStartIcon #fIcon
Cs0 f4 type com.axonactive.workshop.dialog.Categories.CategoriesData #txt
Cs0 f4 guid 1651CE9E99372B64 #txt
Cs0 f4 211 147 26 26 0 12 #rect
Cs0 f4 @|RichDialogEndIcon #fIcon
Cs0 f5 expr out #txt
Cs0 f5 109 160 211 160 #arcP
Cs0 f6 actionDecl 'com.axonactive.workshop.dialog.Categories.CategoriesData out;
' #txt
Cs0 f6 actionTable 'out=in;
' #txt
Cs0 f6 actionCode ivy.log.fatal(in.cacheProcess.items); #txt
Cs0 f6 type com.axonactive.workshop.dialog.Categories.CategoriesData #txt
Cs0 f6 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>Log</name>
        <nameStyle>3,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Cs0 f6 168 42 112 44 -10 -8 #rect
Cs0 f6 @|StepIcon #fIcon
Cs0 f7 expr out #txt
Cs0 f7 109 64 168 64 #arcP
Cs0 f2 expr out #txt
Cs0 f2 280 64 339 64 #arcP
>Proto Cs0 .type com.axonactive.workshop.dialog.Categories.CategoriesData #txt
>Proto Cs0 .processKind HTML_DIALOG #txt
>Proto Cs0 -8 -8 16 16 16 26 #rect
>Proto Cs0 '' #fIcon
Cs0 f3 mainOut f5 tail #connect
Cs0 f5 head f4 mainIn #connect
Cs0 f0 mainOut f7 tail #connect
Cs0 f7 head f6 mainIn #connect
Cs0 f6 mainOut f2 tail #connect
Cs0 f2 head f1 mainIn #connect
