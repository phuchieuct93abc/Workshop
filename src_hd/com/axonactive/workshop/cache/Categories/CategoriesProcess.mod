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
Cs0 @GridStep f13 '' #zField
Cs0 @PushWFArc f14 '' #zField
Cs0 @PushWFArc f2 '' #zField
>Proto Cs0 Cs0 CategoriesProcess #zField
Cs0 f0 guid 1651CE9E98113007 #txt
Cs0 f0 type com.axonactive.workshop.cache.Categories.CategoriesData #txt
Cs0 f0 method start(com.axonactive.workshop.cache.CacheProcess) #txt
Cs0 f0 disableUIEvents true #txt
Cs0 f0 inParameterDecl 'ch.ivyteam.ivy.richdialog.exec.RdMethodCallEvent methodEvent = event as ch.ivyteam.ivy.richdialog.exec.RdMethodCallEvent;
<> param = methodEvent.getInputArguments();
' #txt
Cs0 f0 inParameterMapAction 'out.cacheProcess=param.cacheProcess;
' #txt
Cs0 f0 outParameterDecl '<> result;
' #txt
Cs0 f0 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>start(CacheProcess)</name>
        <nameStyle>19,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Cs0 f0 83 51 26 26 -57 15 #rect
Cs0 f0 @|RichDialogInitStartIcon #fIcon
Cs0 f1 type com.axonactive.workshop.cache.Categories.CategoriesData #txt
Cs0 f1 523 51 26 26 0 12 #rect
Cs0 f1 @|RichDialogProcessEndIcon #fIcon
Cs0 f3 guid 1651CE9E992C59FA #txt
Cs0 f3 type com.axonactive.workshop.cache.Categories.CategoriesData #txt
Cs0 f3 actionDecl 'com.axonactive.workshop.cache.Categories.CategoriesData out;
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
Cs0 f4 type com.axonactive.workshop.cache.Categories.CategoriesData #txt
Cs0 f4 guid 1651CE9E99372B64 #txt
Cs0 f4 211 147 26 26 0 12 #rect
Cs0 f4 @|RichDialogEndIcon #fIcon
Cs0 f5 expr out #txt
Cs0 f5 109 160 211 160 #arcP
Cs0 f13 actionDecl 'com.axonactive.workshop.cache.Categories.CategoriesData out;
' #txt
Cs0 f13 actionTable 'out=in;
' #txt
Cs0 f13 actionCode 'import com.axonactive.workshop.cache.CategoriesInitialization;

in.cacheProcess.needToReview= false;
in.items = CategoriesInitialization.createInstance().loadCategories();' #txt
Cs0 f13 type com.axonactive.workshop.cache.Categories.CategoriesData #txt
Cs0 f13 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>Init data</name>
        <nameStyle>9,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Cs0 f13 168 42 112 44 -21 -8 #rect
Cs0 f13 @|StepIcon #fIcon
Cs0 f14 expr out #txt
Cs0 f14 109 64 168 64 #arcP
Cs0 f2 expr out #txt
Cs0 f2 280 64 523 64 #arcP
>Proto Cs0 .type com.axonactive.workshop.cache.Categories.CategoriesData #txt
>Proto Cs0 .processKind HTML_DIALOG #txt
>Proto Cs0 -8 -8 16 16 16 26 #rect
>Proto Cs0 '' #fIcon
Cs0 f3 mainOut f5 tail #connect
Cs0 f5 head f4 mainIn #connect
Cs0 f0 mainOut f14 tail #connect
Cs0 f14 head f13 mainIn #connect
Cs0 f13 mainOut f2 tail #connect
Cs0 f2 head f1 mainIn #connect
