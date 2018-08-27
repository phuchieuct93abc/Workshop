[Ivy]
164D126E34689F16 3.20 #module
>Proto >Proto Collection #zClass
Cs0 Issue3Process Big #zClass
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
Cs0 @GridStep f8 '' #zField
Cs0 @RichDialogProcessStart f9 '' #zField
Cs0 @RichDialogProcessEnd f10 '' #zField
Cs0 @PushWFArc f11 '' #zField
Cs0 @PushWFArc f12 '' #zField
>Proto Cs0 Cs0 Issue3Process #zField
Cs0 f0 guid 164D11DB5609D68B #txt
Cs0 f0 type com.axonactive.workshop.component.backend.solution.Issue3.Issue3Data #txt
Cs0 f0 method start() #txt
Cs0 f0 disableUIEvents true #txt
Cs0 f0 inParameterDecl 'ch.ivyteam.ivy.richdialog.exec.RdMethodCallEvent methodEvent = event as ch.ivyteam.ivy.richdialog.exec.RdMethodCallEvent;
<> param = methodEvent.getInputArguments();
' #txt
Cs0 f0 outParameterDecl '<> result;
' #txt
Cs0 f0 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>start()</name>
    </language>
</elementInfo>
' #txt
Cs0 f0 83 51 26 26 -16 15 #rect
Cs0 f0 @|RichDialogInitStartIcon #fIcon
Cs0 f1 type com.axonactive.workshop.component.backend.solution.Issue3.Issue3Data #txt
Cs0 f1 339 51 26 26 0 12 #rect
Cs0 f1 @|RichDialogProcessEndIcon #fIcon
Cs0 f3 guid 164D11DB5AEA8D0C #txt
Cs0 f3 type com.axonactive.workshop.component.backend.solution.Issue3.Issue3Data #txt
Cs0 f3 actionDecl 'com.axonactive.workshop.component.backend.solution.Issue3.Issue3Data out;
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
Cs0 f4 type com.axonactive.workshop.component.backend.solution.Issue3.Issue3Data #txt
Cs0 f4 guid 164D11DB5AF70932 #txt
Cs0 f4 211 147 26 26 0 12 #rect
Cs0 f4 @|RichDialogEndIcon #fIcon
Cs0 f5 expr out #txt
Cs0 f5 109 160 211 160 #arcP
Cs0 f6 actionDecl 'com.axonactive.workshop.component.backend.solution.Issue3.Issue3Data out;
' #txt
Cs0 f6 actionTable 'out=in;
' #txt
Cs0 f6 actionCode 'import com.axonactive.workshop.backend.solution.concurrency.bestpractice.ServiceType;
in.services = ServiceType.values();
in.jsonPath = "D:\\GIT\\ivy\\Workshop\\resources\\test.json";' #txt
Cs0 f6 type com.axonactive.workshop.component.backend.solution.Issue3.Issue3Data #txt
Cs0 f6 168 42 112 44 0 -8 #rect
Cs0 f6 @|StepIcon #fIcon
Cs0 f7 expr out #txt
Cs0 f7 109 64 168 64 #arcP
Cs0 f2 expr out #txt
Cs0 f2 280 64 339 64 #arcP
Cs0 f8 actionDecl 'com.axonactive.workshop.component.backend.solution.Issue3.Issue3Data out;
' #txt
Cs0 f8 actionTable 'out=in;
' #txt
Cs0 f8 actionCode 'import com.axonactive.workshop.backend.solution.concurrency.bestpractice.ServiceType;

import javax.faces.context.FacesContext;
import com.axonactive.workshop.backend.UIComponentUtils;
import org.primefaces.context.RequestContext;

in.totalTime = System.currentTimeMillis();
in.result = ServiceType.getService(in.serviceId).getTotalAge(in.jsonPath, Integer.parseInt(in.age)).toString();
in.totalTime = System.currentTimeMillis() - in.totalTime;

RequestContext.getCurrentInstance().update(UIComponentUtils.getFullId("form",FacesContext.getCurrentInstance()));

' #txt
Cs0 f8 type com.axonactive.workshop.component.backend.solution.Issue3.Issue3Data #txt
Cs0 f8 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>Get total item</name>
        <nameStyle>14,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Cs0 f8 141 301 112 44 -36 -8 #rect
Cs0 f8 @|StepIcon #fIcon
Cs0 f9 guid 16551CE6FAAFA454 #txt
Cs0 f9 type com.axonactive.workshop.component.backend.solution.Issue3.Issue3Data #txt
Cs0 f9 actionDecl 'com.axonactive.workshop.component.backend.solution.Issue3.Issue3Data out;
' #txt
Cs0 f9 actionTable 'out=in;
' #txt
Cs0 f9 actionCode 'ivy.log.fatal("service call");' #txt
Cs0 f9 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>callService</name>
        <nameStyle>11,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Cs0 f9 64 310 26 26 -29 15 #rect
Cs0 f9 @|RichDialogProcessStartIcon #fIcon
Cs0 f10 type com.axonactive.workshop.component.backend.solution.Issue3.Issue3Data #txt
Cs0 f10 301 310 26 26 0 12 #rect
Cs0 f10 @|RichDialogProcessEndIcon #fIcon
Cs0 f11 expr out #txt
Cs0 f11 253 323 301 323 #arcP
Cs0 f12 expr out #txt
Cs0 f12 90 323 141 323 #arcP
>Proto Cs0 .type com.axonactive.workshop.component.backend.solution.Issue3.Issue3Data #txt
>Proto Cs0 .processKind HTML_DIALOG #txt
>Proto Cs0 -8 -8 16 16 16 26 #rect
>Proto Cs0 '' #fIcon
Cs0 f3 mainOut f5 tail #connect
Cs0 f5 head f4 mainIn #connect
Cs0 f0 mainOut f7 tail #connect
Cs0 f7 head f6 mainIn #connect
Cs0 f6 mainOut f2 tail #connect
Cs0 f2 head f1 mainIn #connect
Cs0 f9 mainOut f12 tail #connect
Cs0 f12 head f8 mainIn #connect
Cs0 f8 mainOut f11 tail #connect
Cs0 f11 head f10 mainIn #connect
