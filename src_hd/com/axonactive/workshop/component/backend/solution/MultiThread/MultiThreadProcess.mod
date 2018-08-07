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
Ms0 @PushWFArc f5 '' #zField
Ms0 @CallSub f35 '' #zField
Ms0 @GridStep f6 '' #zField
Ms0 @PushWFArc f7 '' #zField
Ms0 @PushWFArc f8 '' #zField
Ms0 @GridStep f9 '' #zField
Ms0 @PushWFArc f10 '' #zField
Ms0 @PushWFArc f12 '' #zField
Ms0 @GridStep f15 '' #zField
Ms0 @PushWFArc f13 '' #zField
Ms0 @PushWFArc f14 '' #zField
>Proto Ms0 Ms0 MultiThreadProcess #zField
Ms0 f0 guid 164FF95A5224864C #txt
Ms0 f0 type com.axonactive.workshop.component.backend.solution.MultiThread.MultiThreadData #txt
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
Ms0 f1 type com.axonactive.workshop.component.backend.solution.MultiThread.MultiThreadData #txt
Ms0 f1 435 117 26 26 0 12 #rect
Ms0 f1 @|RichDialogProcessEndIcon #fIcon
Ms0 f4 type com.axonactive.workshop.component.backend.solution.MultiThread.MultiThreadData #txt
Ms0 f4 guid 164D120CF8E4D97C #txt
Ms0 f4 307 213 26 26 0 12 #rect
Ms0 f4 @|RichDialogEndIcon #fIcon
Ms0 f11 guid 164FF95A524D9445 #txt
Ms0 f11 type com.axonactive.workshop.component.backend.solution.MultiThread.MultiThreadData #txt
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
Ms0 f2 type com.axonactive.workshop.component.backend.solution.MultiThread.MultiThreadData #txt
Ms0 f2 1099 373 26 26 0 12 #rect
Ms0 f2 @|RichDialogProcessEndIcon #fIcon
Ms0 f3 guid 164FF95A524ED4CE #txt
Ms0 f3 type com.axonactive.workshop.component.backend.solution.MultiThread.MultiThreadData #txt
Ms0 f3 actionDecl 'com.axonactive.workshop.component.backend.solution.MultiThread.MultiThreadData out;
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
Ms0 f5 expr out #txt
Ms0 f5 205 226 307 226 #arcP
Ms0 f35 type com.axonactive.workshop.component.backend.solution.MultiThread.MultiThreadData #txt
Ms0 f35 processCall Solution/callService:call(String) #txt
Ms0 f35 doCall true #txt
Ms0 f35 requestActionDecl '<java.lang.String id> param;
' #txt
Ms0 f35 requestMappingAction 'param.id=in.selectedId;
' #txt
Ms0 f35 responseActionDecl 'com.axonactive.workshop.component.backend.solution.MultiThread.MultiThreadData out;
' #txt
Ms0 f35 responseMappingAction 'out=in;
out.personalInformation=result.personalInformation;
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
Ms0 f35 432 364 112 44 -29 -8 #rect
Ms0 f35 @|CallSubIcon #fIcon
Ms0 f6 actionDecl 'com.axonactive.workshop.component.backend.solution.MultiThread.MultiThreadData out;
' #txt
Ms0 f6 actionTable 'out=in;
' #txt
Ms0 f6 actionCode 'import java.util.ArrayList;
import com.axonactive.workshop.backend.concurrency.rest.PersonalInformation;
in.personalInformation = new PersonalInformation();

in.personIds = new ArrayList ();
in.personIds.add("0");
in.personIds.add("1");' #txt
Ms0 f6 type com.axonactive.workshop.component.backend.solution.MultiThread.MultiThreadData #txt
Ms0 f6 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>init</name>
        <nameStyle>4,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Ms0 f6 264 108 112 44 -8 -8 #rect
Ms0 f6 @|StepIcon #fIcon
Ms0 f7 expr out #txt
Ms0 f7 205 130 264 130 #arcP
Ms0 f8 expr out #txt
Ms0 f8 376 130 435 130 #arcP
Ms0 f9 actionDecl 'com.axonactive.workshop.component.backend.solution.MultiThread.MultiThreadData out;
' #txt
Ms0 f9 actionTable 'out=in;
' #txt
Ms0 f9 actionCode 'in.totalTime = System.currentTimeMillis();' #txt
Ms0 f9 type com.axonactive.workshop.component.backend.solution.MultiThread.MultiThreadData #txt
Ms0 f9 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>init time counter</name>
        <nameStyle>17,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Ms0 f9 272 364 112 44 -43 -8 #rect
Ms0 f9 @|StepIcon #fIcon
Ms0 f10 expr out #txt
Ms0 f10 213 386 272 386 #arcP
Ms0 f12 expr out #txt
Ms0 f12 384 386 432 386 #arcP
Ms0 f15 actionDecl 'com.axonactive.workshop.component.backend.solution.MultiThread.MultiThreadData out;
' #txt
Ms0 f15 actionTable 'out=in;
' #txt
Ms0 f15 actionCode 'import javax.faces.context.FacesContext;
import com.axonactive.workshop.backend.UIComponentUtils;
import org.primefaces.context.RequestContext;
in.totalTime = System.currentTimeMillis() - in.totalTime;

RequestContext.getCurrentInstance().update(UIComponentUtils.getFullId("form",FacesContext.getCurrentInstance()));
' #txt
Ms0 f15 type com.axonactive.workshop.component.backend.solution.MultiThread.MultiThreadData #txt
Ms0 f15 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>calculate executed time</name>
        <nameStyle>23,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Ms0 f15 728 364 144 44 -64 -8 #rect
Ms0 f15 @|StepIcon #fIcon
Ms0 f13 expr out #txt
Ms0 f13 544 386 728 386 #arcP
Ms0 f13 0 0.4052397868561279 0 0 #arcLabel
Ms0 f14 expr out #txt
Ms0 f14 872 386 1099 386 #arcP
Ms0 f14 0 0.4052397868561279 0 0 #arcLabel
>Proto Ms0 .type com.axonactive.workshop.component.backend.solution.MultiThread.MultiThreadData #txt
>Proto Ms0 .processKind HTML_DIALOG #txt
>Proto Ms0 -8 -8 16 16 16 26 #rect
>Proto Ms0 '' #fIcon
Ms0 f3 mainOut f5 tail #connect
Ms0 f5 head f4 mainIn #connect
Ms0 f0 mainOut f7 tail #connect
Ms0 f7 head f6 mainIn #connect
Ms0 f6 mainOut f8 tail #connect
Ms0 f8 head f1 mainIn #connect
Ms0 f11 mainOut f10 tail #connect
Ms0 f10 head f9 mainIn #connect
Ms0 f9 mainOut f12 tail #connect
Ms0 f12 head f35 mainIn #connect
Ms0 f35 mainOut f13 tail #connect
Ms0 f13 head f15 mainIn #connect
Ms0 f15 mainOut f14 tail #connect
Ms0 f14 head f2 mainIn #connect
