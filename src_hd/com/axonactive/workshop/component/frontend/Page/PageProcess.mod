[Ivy]
1656612AE87FE6AB 3.20 #module
>Proto >Proto Collection #zClass
Rs0 PageProcess Big #zClass
Rs0 RD #cInfo
Rs0 #process
Rs0 @TextInP .ui2RdDataAction .ui2RdDataAction #zField
Rs0 @TextInP .rdData2UIAction .rdData2UIAction #zField
Rs0 @TextInP .resExport .resExport #zField
Rs0 @TextInP .type .type #zField
Rs0 @TextInP .processKind .processKind #zField
Rs0 @AnnotationInP-0n ai ai #zField
Rs0 @MessageFlowInP-0n messageIn messageIn #zField
Rs0 @MessageFlowOutP-0n messageOut messageOut #zField
Rs0 @TextInP .xml .xml #zField
Rs0 @TextInP .responsibility .responsibility #zField
Rs0 @RichDialogInitStart f0 '' #zField
Rs0 @RichDialogProcessEnd f1 '' #zField
Rs0 @PushWFArc f2 '' #zField
Rs0 @RichDialogProcessStart f3 '' #zField
Rs0 @RichDialogEnd f4 '' #zField
Rs0 @PushWFArc f5 '' #zField
Rs0 @RichDialogMethodStart f6 '' #zField
Rs0 @RichDialogProcessEnd f7 '' #zField
Rs0 @PushWFArc f8 '' #zField
>Proto Rs0 Rs0 PageProcess #zField
Rs0 f0 guid 1656612AEA7FFF6B #txt
Rs0 f0 type com.axonactive.workshop.component.frontend.Page.PageData #txt
Rs0 f0 method start() #txt
Rs0 f0 disableUIEvents true #txt
Rs0 f0 inParameterDecl 'ch.ivyteam.ivy.richdialog.exec.RdMethodCallEvent methodEvent = event as ch.ivyteam.ivy.richdialog.exec.RdMethodCallEvent;
<> param = methodEvent.getInputArguments();
' #txt
Rs0 f0 outParameterDecl '<> result;
' #txt
Rs0 f0 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>start()</name>
    </language>
</elementInfo>
' #txt
Rs0 f0 83 51 26 26 -16 15 #rect
Rs0 f0 @|RichDialogInitStartIcon #fIcon
Rs0 f1 type com.axonactive.workshop.component.frontend.Page.PageData #txt
Rs0 f1 211 51 26 26 0 12 #rect
Rs0 f1 @|RichDialogProcessEndIcon #fIcon
Rs0 f2 expr out #txt
Rs0 f2 109 64 211 64 #arcP
Rs0 f3 guid 1656612AEB826DB7 #txt
Rs0 f3 type com.axonactive.workshop.component.frontend.Page.PageData #txt
Rs0 f3 actionDecl 'com.axonactive.workshop.component.frontend.Page.PageData out;
' #txt
Rs0 f3 actionTable 'out=in;
' #txt
Rs0 f3 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>close</name>
    </language>
</elementInfo>
' #txt
Rs0 f3 83 147 26 26 -15 12 #rect
Rs0 f3 @|RichDialogProcessStartIcon #fIcon
Rs0 f4 type com.axonactive.workshop.component.frontend.Page.PageData #txt
Rs0 f4 guid 1656612AEB91B128 #txt
Rs0 f4 211 147 26 26 0 12 #rect
Rs0 f4 @|RichDialogEndIcon #fIcon
Rs0 f5 expr out #txt
Rs0 f5 109 160 211 160 #arcP
Rs0 f6 guid 16570F64556384A6 #txt
Rs0 f6 type com.axonactive.workshop.component.frontend.Page.PageData #txt
Rs0 f6 method show() #txt
Rs0 f6 disableUIEvents false #txt
Rs0 f6 inParameterDecl 'ch.ivyteam.ivy.richdialog.exec.RdMethodCallEvent methodEvent = event as ch.ivyteam.ivy.richdialog.exec.RdMethodCallEvent;
<> param = methodEvent.getInputArguments();
' #txt
Rs0 f6 inActionCode 'out.show =!out.show;' #txt
Rs0 f6 outParameterDecl '<> result;
' #txt
Rs0 f6 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>show()</name>
        <nameStyle>6,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Rs0 f6 83 243 26 26 -19 15 #rect
Rs0 f6 @|RichDialogMethodStartIcon #fIcon
Rs0 f7 type com.axonactive.workshop.component.frontend.Page.PageData #txt
Rs0 f7 211 243 26 26 0 12 #rect
Rs0 f7 @|RichDialogProcessEndIcon #fIcon
Rs0 f8 109 256 211 256 #arcP
>Proto Rs0 .type com.axonactive.workshop.component.frontend.Page.PageData #txt
>Proto Rs0 .processKind HTML_DIALOG #txt
>Proto Rs0 -8 -8 16 16 16 26 #rect
>Proto Rs0 '' #fIcon
Rs0 f0 mainOut f2 tail #connect
Rs0 f2 head f1 mainIn #connect
Rs0 f3 mainOut f5 tail #connect
Rs0 f5 head f4 mainIn #connect
Rs0 f6 mainOut f8 tail #connect
Rs0 f8 head f7 mainIn #connect
