[Ivy]
164D11DB463EF7A3 3.20 #module
>Proto >Proto Collection #zClass
Cs0 ConcurrencyProcess Big #zClass
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
Cs0 @RichDialogProcessStart f6 '' #zField
Cs0 @GridStep f7 '' #zField
Cs0 @RichDialogProcessEnd f8 '' #zField
Cs0 @PushWFArc f9 '' #zField
Cs0 @PushWFArc f10 '' #zField
Cs0 @GridStep f11 '' #zField
Cs0 @PushWFArc f12 '' #zField
Cs0 @PushWFArc f2 '' #zField
>Proto Cs0 Cs0 ConcurrencyProcess #zField
Cs0 f0 guid 164D11DB5609D68B #txt
Cs0 f0 type com.axonactive.workshop.component.backend.Concurrency.ConcurrencyData #txt
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
Cs0 f1 type com.axonactive.workshop.component.backend.Concurrency.ConcurrencyData #txt
Cs0 f1 339 51 26 26 0 12 #rect
Cs0 f1 @|RichDialogProcessEndIcon #fIcon
Cs0 f3 guid 164D11DB5AEA8D0C #txt
Cs0 f3 type com.axonactive.workshop.component.backend.Concurrency.ConcurrencyData #txt
Cs0 f3 actionDecl 'com.axonactive.workshop.component.backend.Concurrency.ConcurrencyData out;
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
Cs0 f4 type com.axonactive.workshop.component.backend.Concurrency.ConcurrencyData #txt
Cs0 f4 guid 164D11DB5AF70932 #txt
Cs0 f4 211 147 26 26 0 12 #rect
Cs0 f4 @|RichDialogEndIcon #fIcon
Cs0 f5 expr out #txt
Cs0 f5 109 160 211 160 #arcP
Cs0 f6 guid 16551BFEBAF40DB0 #txt
Cs0 f6 type com.axonactive.workshop.component.backend.Concurrency.ConcurrencyData #txt
Cs0 f6 actionDecl 'com.axonactive.workshop.component.backend.Concurrency.ConcurrencyData out;
' #txt
Cs0 f6 actionTable 'out=in;
' #txt
Cs0 f6 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>callService</name>
        <nameStyle>11,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Cs0 f6 83 243 26 26 -29 15 #rect
Cs0 f6 @|RichDialogProcessStartIcon #fIcon
Cs0 f7 actionDecl 'com.axonactive.workshop.component.backend.Concurrency.ConcurrencyData out;
' #txt
Cs0 f7 actionTable 'out=in;
' #txt
Cs0 f7 actionCode 'import com.axonactive.workshop.backend.concurrency.bestpractice.ParseJsonService;
import javax.faces.context.FacesContext;
import com.axonactive.workshop.backend.UIComponentUtils;
import org.primefaces.context.RequestContext;

in.totalTime = System.currentTimeMillis();
in.result = new ParseJsonService().count(in.jsonPath, Integer.parseInt(in.age)).toString();
in.totalTime = System.currentTimeMillis() - in.totalTime;

RequestContext.getCurrentInstance().update(UIComponentUtils.getFullId("form",FacesContext.getCurrentInstance()));

' #txt
Cs0 f7 type com.axonactive.workshop.component.backend.Concurrency.ConcurrencyData #txt
Cs0 f7 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>Get total item</name>
        <nameStyle>14,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Cs0 f7 160 234 112 44 -36 -8 #rect
Cs0 f7 @|StepIcon #fIcon
Cs0 f8 type com.axonactive.workshop.component.backend.Concurrency.ConcurrencyData #txt
Cs0 f8 320 243 26 26 0 12 #rect
Cs0 f8 @|RichDialogProcessEndIcon #fIcon
Cs0 f9 expr out #txt
Cs0 f9 109 256 160 256 #arcP
Cs0 f10 expr out #txt
Cs0 f10 272 256 320 256 #arcP
Cs0 f11 actionDecl 'com.axonactive.workshop.component.backend.Concurrency.ConcurrencyData out;
' #txt
Cs0 f11 actionTable 'out=in;
' #txt
Cs0 f11 actionCode 'in.jsonPath = "D:\\GIT\\ivy\\Workshop\\resources\\test.json";' #txt
Cs0 f11 type com.axonactive.workshop.component.backend.Concurrency.ConcurrencyData #txt
Cs0 f11 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>init</name>
        <nameStyle>4,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Cs0 f11 168 42 112 44 -8 -8 #rect
Cs0 f11 @|StepIcon #fIcon
Cs0 f12 expr out #txt
Cs0 f12 109 64 168 64 #arcP
Cs0 f2 expr out #txt
Cs0 f2 280 64 339 64 #arcP
>Proto Cs0 .type com.axonactive.workshop.component.backend.Concurrency.ConcurrencyData #txt
>Proto Cs0 .processKind HTML_DIALOG #txt
>Proto Cs0 -8 -8 16 16 16 26 #rect
>Proto Cs0 '' #fIcon
Cs0 f3 mainOut f5 tail #connect
Cs0 f5 head f4 mainIn #connect
Cs0 f6 mainOut f9 tail #connect
Cs0 f9 head f7 mainIn #connect
Cs0 f7 mainOut f10 tail #connect
Cs0 f10 head f8 mainIn #connect
Cs0 f0 mainOut f12 tail #connect
Cs0 f12 head f11 mainIn #connect
Cs0 f11 mainOut f2 tail #connect
Cs0 f2 head f1 mainIn #connect
