[Ivy]
164D126FB8DEA2B2 3.20 #module
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
Ms0 @RichDialogProcessEnd f1 '' #zField
Ms0 @RichDialogEnd f4 '' #zField
Ms0 @RichDialogMethodStart f11 '' #zField
Ms0 @RichDialogProcessEnd f2 '' #zField
Ms0 @RichDialogProcessStart f3 '' #zField
Ms0 @PushWFArc f10 '' #zField
Ms0 @PushWFArc f5 '' #zField
Ms0 @CallSub f35 '' #zField
Ms0 @PushWFArc f32 '' #zField
Ms0 @GridStep f6 '' #zField
Ms0 @PushWFArc f8 '' #zField
Ms0 @GridStep f7 '' #zField
Ms0 @PushWFArc f9 '' #zField
Ms0 @PushWFArc f13 '' #zField
>Proto Ms0 Ms0 MultiThreadProcess #zField
Ms0 f0 guid 164FF95A5224864C #txt
Ms0 f0 type com.axonactive.workshop.solution.backend.MultiThread.MultiThreadData #txt
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
        <name>start</name>
        <nameStyle>5,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Ms0 f0 179 117 26 26 -12 15 #rect
Ms0 f0 @|RichDialogInitStartIcon #fIcon
Ms0 f1 type com.axonactive.workshop.solution.backend.MultiThread.MultiThreadData #txt
Ms0 f1 435 117 26 26 0 12 #rect
Ms0 f1 @|RichDialogProcessEndIcon #fIcon
Ms0 f4 type com.axonactive.workshop.solution.backend.MultiThread.MultiThreadData #txt
Ms0 f4 guid 164D120CF8E4D97C #txt
Ms0 f4 307 213 26 26 0 12 #rect
Ms0 f4 @|RichDialogEndIcon #fIcon
Ms0 f11 guid 164FF95A524D9445 #txt
Ms0 f11 type com.axonactive.workshop.solution.backend.MultiThread.MultiThreadData #txt
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
        <name>callService()</name>
        <nameStyle>13,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Ms0 f11 187 373 26 26 -33 15 #rect
Ms0 f11 @|RichDialogMethodStartIcon #fIcon
Ms0 f2 type com.axonactive.workshop.solution.backend.MultiThread.MultiThreadData #txt
Ms0 f2 1051 371 26 26 0 12 #rect
Ms0 f2 @|RichDialogProcessEndIcon #fIcon
Ms0 f3 guid 164FF95A524ED4CE #txt
Ms0 f3 type com.axonactive.workshop.solution.backend.MultiThread.MultiThreadData #txt
Ms0 f3 actionDecl 'com.axonactive.workshop.solution.backend.MultiThread.MultiThreadData out;
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
Ms0 f3 179 213 26 26 -15 12 #rect
Ms0 f3 @|RichDialogProcessStartIcon #fIcon
Ms0 f10 expr out #txt
Ms0 f10 205 130 435 130 #arcP
Ms0 f5 expr out #txt
Ms0 f5 205 226 307 226 #arcP
Ms0 f35 type com.axonactive.workshop.solution.backend.MultiThread.MultiThreadData #txt
Ms0 f35 processCall Solution/callService:call(com.axonactive.workshop.backend.concurrency.rest.Person) #txt
Ms0 f35 doCall true #txt
Ms0 f35 requestActionDecl '<com.axonactive.workshop.backend.concurrency.rest.Person person> param;
' #txt
Ms0 f35 requestMappingAction 'param.person=in.person;
' #txt
Ms0 f35 responseActionDecl 'com.axonactive.workshop.solution.backend.MultiThread.MultiThreadData out;
' #txt
Ms0 f35 responseMappingAction 'out=in;
' #txt
Ms0 f35 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>callService</name>
        <nameStyle>11,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Ms0 f35 384 362 112 44 -29 -8 #rect
Ms0 f35 @|CallSubIcon #fIcon
Ms0 f32 expr out #txt
Ms0 f32 496 384 1051 384 #arcP
Ms0 f32 0 0.4052397868561279 0 0 #arcLabel
Ms0 f6 actionDecl 'com.axonactive.workshop.solution.backend.MultiThread.MultiThreadData out;
' #txt
Ms0 f6 actionTable 'out=in;
' #txt
Ms0 f6 actionCode 'import ch.ivyteam.ivy.process.callandwait.beans.Wait;
import ch.ivyteam.ivy.workflow.signal.ITaskBoundarySignalEventReceiver;
 List<ITaskBoundarySignalEventReceiver> signalBoundaries = ivy.wf.signals().receivers().createStartSignalQuery().where().signalCodePattern().isLike("a").executor().results();
 List<ITaskBoundarySignalEventReceiver> signalBoundaries1 = ivy.wf.signals().receivers().createStartSignalQuery().where().signalCodePattern().isLike("b").executor().results();' #txt
Ms0 f6 type com.axonactive.workshop.solution.backend.MultiThread.MultiThreadData #txt
Ms0 f6 424 458 112 44 0 -8 #rect
Ms0 f6 @|StepIcon #fIcon
Ms0 f8 expr out #txt
Ms0 f8 536 480 1051 386 #arcP
Ms0 f7 actionDecl 'com.axonactive.workshop.solution.backend.MultiThread.MultiThreadData out;
' #txt
Ms0 f7 actionTable 'out=in;
' #txt
Ms0 f7 actionCode 'import java.util.concurrent.CountDownLatch;
import ch.ivyteam.ivy.process.model.value.SignalCode;

CountDownLatch countdown = new CountDownLatch(2);

ivy.wf.signals().send(new SignalCode("a"), countdown);
ivy.wf.signals().send(new SignalCode("b"),countdown);' #txt
Ms0 f7 type com.axonactive.workshop.solution.backend.MultiThread.MultiThreadData #txt
Ms0 f7 357 604 112 44 0 -8 #rect
Ms0 f7 @|StepIcon #fIcon
Ms0 f9 expr out #txt
Ms0 f9 469 605 1051 388 #arcP
Ms0 f13 expr out #txt
Ms0 f13 212 385 384 384 #arcP
>Proto Ms0 .type com.axonactive.workshop.solution.backend.MultiThread.MultiThreadData #txt
>Proto Ms0 .processKind HTML_DIALOG #txt
>Proto Ms0 -8 -8 16 16 16 26 #rect
>Proto Ms0 '' #fIcon
Ms0 f3 mainOut f5 tail #connect
Ms0 f5 head f4 mainIn #connect
Ms0 f0 mainOut f10 tail #connect
Ms0 f10 head f1 mainIn #connect
Ms0 f35 mainOut f32 tail #connect
Ms0 f32 head f2 mainIn #connect
Ms0 f6 mainOut f8 tail #connect
Ms0 f8 head f2 mainIn #connect
Ms0 f7 mainOut f9 tail #connect
Ms0 f9 head f2 mainIn #connect
Ms0 f11 mainOut f13 tail #connect
Ms0 f13 head f35 mainIn #connect
