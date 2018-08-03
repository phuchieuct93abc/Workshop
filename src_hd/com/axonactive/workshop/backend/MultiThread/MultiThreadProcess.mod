[Ivy]
164D120CF419D3FF 3.20 #module
>Proto >Proto Collection #zClass
Ms0 MultiThreadProcess Big #zClass
Ms0 RD #cInfo
Ms0 #process
Ms0 @TextInP .ui2RdDataAction .ui2RdDataAction #zField
Ms0 @TextInP .rdData2UIAction .rdData2UIAction #zField
Ms0 @TextInP .resExport .resExport #zField
Ms0 @TextInP .type .type #zField
Ms0 @TextInP .processKind .processKind #zField
Ms0 @AnnotationInP-0n ai ai #zField
Ms0 @MessageFlowInP-0n messageIn messageIn #zField
Ms0 @MessageFlowOutP-0n messageOut messageOut #zField
Ms0 @TextInP .xml .xml #zField
Ms0 @TextInP .responsibility .responsibility #zField
Ms0 @RichDialogInitStart f0 '' #zField
Ms0 @RichDialogProcessStart f3 '' #zField
Ms0 @RichDialogEnd f4 '' #zField
Ms0 @PushWFArc f5 '' #zField
Ms0 @RichDialogMethodStart f11 '' #zField
Ms0 @GridStep f6 '' #zField
Ms0 @PushWFArc f7 '' #zField
Ms0 @PushWFArc f10 '' #zField
Ms0 @RichDialogProcessEnd f1 '' #zField
Ms0 @RichDialogProcessEnd f2 '' #zField
Ms0 @PushWFArc f8 '' #zField
>Proto Ms0 Ms0 MultiThreadProcess #zField
Ms0 f0 guid 164D120CF65666A8 #txt
Ms0 f0 type com.axonactive.workshop.backend.MultiThread.MultiThreadData #txt
Ms0 f0 method start() #txt
Ms0 f0 disableUIEvents true #txt
Ms0 f0 inParameterDecl 'ch.ivyteam.ivy.richdialog.exec.RdMethodCallEvent methodEvent = event as ch.ivyteam.ivy.richdialog.exec.RdMethodCallEvent;
<> param = methodEvent.getInputArguments();
' #txt
Ms0 f0 outParameterDecl '<> result;
' #txt
Ms0 f0 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>start()</name>
    </language>
</elementInfo>
' #txt
Ms0 f0 83 51 26 26 -16 15 #rect
Ms0 f0 @|RichDialogInitStartIcon #fIcon
Ms0 f3 guid 164D120CF8E95FE4 #txt
Ms0 f3 type com.axonactive.workshop.backend.MultiThread.MultiThreadData #txt
Ms0 f3 actionDecl 'com.axonactive.workshop.backend.MultiThread.MultiThreadData out;
' #txt
Ms0 f3 actionTable 'out=in;
' #txt
Ms0 f3 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>close</name>
    </language>
</elementInfo>
' #txt
Ms0 f3 83 147 26 26 -15 12 #rect
Ms0 f3 @|RichDialogProcessStartIcon #fIcon
Ms0 f4 type com.axonactive.workshop.backend.MultiThread.MultiThreadData #txt
Ms0 f4 guid 164D120CF8E4D97C #txt
Ms0 f4 211 147 26 26 0 12 #rect
Ms0 f4 @|RichDialogEndIcon #fIcon
Ms0 f5 expr out #txt
Ms0 f5 109 160 211 160 #arcP
Ms0 f11 guid 164FF7E8C068A95A #txt
Ms0 f11 type com.axonactive.workshop.backend.MultiThread.MultiThreadData #txt
Ms0 f11 method callService() #txt
Ms0 f11 disableUIEvents false #txt
Ms0 f11 inParameterDecl 'ch.ivyteam.ivy.richdialog.exec.RdMethodCallEvent methodEvent = event as ch.ivyteam.ivy.richdialog.exec.RdMethodCallEvent;
<> param = methodEvent.getInputArguments();
' #txt
Ms0 f11 outParameterDecl '<> result;
' #txt
Ms0 f11 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>callService1()</name>
        <nameStyle>14,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Ms0 f11 91 291 26 26 -37 15 #rect
Ms0 f11 @|RichDialogMethodStartIcon #fIcon
Ms0 f6 actionDecl 'com.axonactive.workshop.backend.MultiThread.MultiThreadData out;
' #txt
Ms0 f6 actionTable 'out=in;
' #txt
Ms0 f6 actionCode 'import javax.faces.context.FacesContext;
import com.axonactive.workshop.backend.UIComponentUtils;
import org.primefaces.context.RequestContext;

import com.axonactive.workshop.backend.concurrency.rest.RestClient;
in.totalTime = System.currentTimeMillis();
in.person = RestClient.getInstance().getPersonById(0);
RestClient.getInstance().getPersonById(1);

in.totalTime = System.currentTimeMillis() - in.totalTime;
ivy.log.fatal(in.totalTime);

RequestContext.getCurrentInstance().update(UIComponentUtils.getFullId("form",FacesContext.getCurrentInstance()));
' #txt
Ms0 f6 security system #txt
Ms0 f6 type com.axonactive.workshop.backend.MultiThread.MultiThreadData #txt
Ms0 f6 175 280 112 44 0 -8 #rect
Ms0 f6 @|StepIcon #fIcon
Ms0 f7 expr out #txt
Ms0 f7 116 303 175 302 #arcP
Ms0 f10 expr out #txt
Ms0 f10 109 64 339 64 #arcP
Ms0 f1 type com.axonactive.workshop.backend.MultiThread.MultiThreadData #txt
Ms0 f1 339 51 26 26 0 12 #rect
Ms0 f1 @|RichDialogProcessEndIcon #fIcon
Ms0 f2 type com.axonactive.workshop.backend.MultiThread.MultiThreadData #txt
Ms0 f2 386 288 26 26 0 12 #rect
Ms0 f2 @|RichDialogProcessEndIcon #fIcon
Ms0 f8 expr out #txt
Ms0 f8 287 302 386 301 #arcP
>Proto Ms0 .type com.axonactive.workshop.backend.MultiThread.MultiThreadData #txt
>Proto Ms0 .processKind HTML_DIALOG #txt
>Proto Ms0 -8 -8 16 16 16 26 #rect
>Proto Ms0 '' #fIcon
Ms0 f3 mainOut f5 tail #connect
Ms0 f5 head f4 mainIn #connect
Ms0 f0 mainOut f10 tail #connect
Ms0 f10 head f1 mainIn #connect
Ms0 f11 mainOut f7 tail #connect
Ms0 f7 head f6 mainIn #connect
Ms0 f6 mainOut f8 tail #connect
Ms0 f8 head f2 mainIn #connect
