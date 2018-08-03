[Ivy]
164FFA67395871EA 3.20 #module
>Proto >Proto Collection #zClass
ce0 callService Big #zClass
ce0 B #cInfo
ce0 #process
ce0 @TextInP .resExport .resExport #zField
ce0 @TextInP .type .type #zField
ce0 @TextInP .processKind .processKind #zField
ce0 @AnnotationInP-0n ai ai #zField
ce0 @MessageFlowInP-0n messageIn messageIn #zField
ce0 @MessageFlowOutP-0n messageOut messageOut #zField
ce0 @TextInP .xml .xml #zField
ce0 @TextInP .responsibility .responsibility #zField
ce0 @StartSub f0 '' #zField
ce0 @EndSub f1 '' #zField
ce0 @SignalStartEvent f4 '' #zField
ce0 @GridStep f9 '' #zField
ce0 @SignalStartEvent f3 '' #zField
ce0 @PushWFArc f5 '' #zField
ce0 @EndTask f6 '' #zField
ce0 @EndTask f7 '' #zField
ce0 @GridStep f15 '' #zField
ce0 @PushWFArc f2 '' #zField
ce0 @GridStep f14 '' #zField
ce0 @PushWFArc f8 '' #zField
ce0 @RestClientCall f13 '' #zField
ce0 @RestClientCall f16 '' #zField
ce0 @Split f17 '' #zField
ce0 @Join f18 '' #zField
ce0 @PushWFArc f10 '' #zField
ce0 @PushWFArc f20 '' #zField
ce0 @SJArc f21 '' #zField
ce0 @SJArc f22 '' #zField
ce0 @PushWFArc f23 '' #zField
ce0 @PushWFArc f24 '' #zField
ce0 @TaskSwitch f19 '' #zField
ce0 @TkArc f25 '' #zField
ce0 @TkArc f11 '' #zField
ce0 @PushWFArc f12 '' #zField
>Proto ce0 ce0 callService #zField
ce0 f0 inParamDecl '<com.axonactive.workshop.backend.concurrency.rest.Person person> param;' #txt
ce0 f0 inParamTable 'out.person=param.person;
' #txt
ce0 f0 outParamDecl '<> result;
' #txt
ce0 f0 actionDecl 'Solution.callServiceData out;
' #txt
ce0 f0 callSignature call(com.axonactive.workshop.backend.concurrency.rest.Person) #txt
ce0 f0 type Solution.callServiceData #txt
ce0 f0 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>call(Person)</name>
        <nameStyle>12,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f0 81 33 30 30 -33 17 #rect
ce0 f0 @|StartSubIcon #fIcon
ce0 f1 type Solution.callServiceData #txt
ce0 f1 393 81 30 30 0 15 #rect
ce0 f1 @|EndSubIcon #fIcon
ce0 f4 actionDecl 'Solution.callServiceData out;
' #txt
ce0 f4 type Solution.callServiceData #txt
ce0 f4 signalCode b #txt
ce0 f4 attachToBusinessCase true #txt
ce0 f4 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>b</name>
    </language>
</elementInfo>
' #txt
ce0 f4 113 377 30 30 -3 17 #rect
ce0 f4 @|SignalStartEventIcon #fIcon
ce0 f9 actionDecl 'Solution.callServiceData out;
' #txt
ce0 f9 actionTable 'out=in;
' #txt
ce0 f9 actionCode 'import java.util.concurrent.CountDownLatch;
import ch.ivyteam.ivy.process.model.value.SignalCode;

in.countdown = new CountDownLatch(1);

ivy.wf.signals().send(new SignalCode("a"), in.countdown);
ivy.wf.signals().send(new SignalCode("b"),in.countdown);
in.countdown.await();' #txt
ce0 f9 type Solution.callServiceData #txt
ce0 f9 200 74 112 44 0 -8 #rect
ce0 f9 @|StepIcon #fIcon
ce0 f3 actionDecl 'Solution.callServiceData out;
' #txt
ce0 f3 actionCode 'import java.util.concurrent.CountDownLatch;

import com.google.gson.Gson;


' #txt
ce0 f3 type Solution.callServiceData #txt
ce0 f3 signalCode a #txt
ce0 f3 attachToBusinessCase true #txt
ce0 f3 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>a</name>
        <nameStyle>1,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f3 113 233 30 30 -3 17 #rect
ce0 f3 @|SignalStartEventIcon #fIcon
ce0 f5 expr out #txt
ce0 f5 312 96 393 96 #arcP
ce0 f6 type Solution.callServiceData #txt
ce0 f6 401 233 30 30 0 15 #rect
ce0 f6 @|EndIcon #fIcon
ce0 f7 type Solution.callServiceData #txt
ce0 f7 497 377 30 30 0 15 #rect
ce0 f7 @|EndIcon #fIcon
ce0 f15 actionDecl 'Solution.callServiceData out;
' #txt
ce0 f15 actionTable 'out=in;
' #txt
ce0 f15 actionCode 'import com.axonactive.workshop.backend.concurrency.rest.RestClient;
in.person = RestClient.getInstance().getPersonById(0);
ivy.log.fatal(in.person);
//in.countdown.countDown();' #txt
ce0 f15 security system #txt
ce0 f15 type Solution.callServiceData #txt
ce0 f15 189 226 112 44 0 -8 #rect
ce0 f15 @|StepIcon #fIcon
ce0 f2 143 248 189 248 #arcP
ce0 f14 actionDecl 'Solution.callServiceData out;
' #txt
ce0 f14 actionTable 'out=in;
' #txt
ce0 f14 actionCode 'import com.axonactive.workshop.backend.concurrency.rest.RestClient;
RestClient.getInstance().getPersonById(1);' #txt
ce0 f14 type Solution.callServiceData #txt
ce0 f14 243 370 112 44 0 -8 #rect
ce0 f14 @|StepIcon #fIcon
ce0 f8 143 392 243 392 #arcP
ce0 f13 clientId 6649babd-2696-4946-98e4-04b979cea200 #txt
ce0 f13 path 1 #txt
ce0 f13 584 74 112 44 0 -8 #rect
ce0 f13 @|RestClientCallIcon #fIcon
ce0 f16 clientId 6649babd-2696-4946-98e4-04b979cea200 #txt
ce0 f16 path 0 #txt
ce0 f16 616 186 112 44 0 -8 #rect
ce0 f16 @|RestClientCallIcon #fIcon
ce0 f17 actionDecl 'Solution.callServiceData out1;
Solution.callServiceData out2;
' #txt
ce0 f17 actionTable 'out1=in;
' #txt
ce0 f17 type Solution.callServiceData #txt
ce0 f17 464 144 32 32 0 16 #rect
ce0 f17 @|ThreadIcon #fIcon
ce0 f18 actionDecl 'Solution.callServiceData out;
' #txt
ce0 f18 actionTable 'out=in1;
' #txt
ce0 f18 816 128 32 32 0 16 #rect
ce0 f18 @|JoinIcon #fIcon
ce0 f10 expr out1 #txt
ce0 f10 491 155 585 118 #arcP
ce0 f20 expr out2 #txt
ce0 f20 493 163 616 208 #arcP
ce0 f21 type Solution.callServiceData #txt
ce0 f21 var in1 #txt
ce0 f21 696 96 819 141 #arcP
ce0 f22 type Solution.callServiceData #txt
ce0 f22 var in2 #txt
ce0 f22 727 186 821 149 #arcP
ce0 f23 expr out #txt
ce0 f23 832 128 422 90 #arcP
ce0 f23 1 832 96 #addKink
ce0 f23 2 584 32 #addKink
ce0 f23 1 0.7726397481423342 0 0 #arcLabel
ce0 f24 expr out #txt
ce0 f24 111 48 256 74 #arcP
ce0 f24 1 248 48 #addKink
ce0 f24 0 0.6834234295346809 0 0 #arcLabel
ce0 f19 actionDecl 'Solution.callServiceData out;
' #txt
ce0 f19 actionTable 'out=in1;
' #txt
ce0 f19 outTypes "Solution.callServiceData" #txt
ce0 f19 outLinks "TaskA.ivp" #txt
ce0 f19 type Solution.callServiceData #txt
ce0 f19 template "" #txt
ce0 f19 416 304 32 32 0 16 #rect
ce0 f19 @|TaskSwitchIcon #fIcon
ce0 f25 expr out #txt
ce0 f25 type Solution.callServiceData #txt
ce0 f25 var in1 #txt
ce0 f25 301 270 420 316 #arcP
ce0 f11 expr out #txt
ce0 f11 type Solution.callServiceData #txt
ce0 f11 var in2 #txt
ce0 f11 340 370 422 326 #arcP
ce0 f12 expr data #txt
ce0 f12 outCond ivp=="TaskA.ivp" #txt
ce0 f12 440 328 500 381 #arcP
>Proto ce0 .type Solution.callServiceData #txt
>Proto ce0 .processKind CALLABLE_SUB #txt
>Proto ce0 0 0 32 24 18 0 #rect
>Proto ce0 @|BIcon #fIcon
ce0 f9 mainOut f5 tail #connect
ce0 f5 head f1 mainIn #connect
ce0 f3 mainOut f2 tail #connect
ce0 f2 head f15 mainIn #connect
ce0 f4 mainOut f8 tail #connect
ce0 f8 head f14 mainIn #connect
ce0 f17 out f10 tail #connect
ce0 f10 head f13 mainIn #connect
ce0 f17 out f20 tail #connect
ce0 f20 head f16 mainIn #connect
ce0 f13 mainOut f21 tail #connect
ce0 f21 head f18 in #connect
ce0 f16 mainOut f22 tail #connect
ce0 f22 head f18 in #connect
ce0 f18 mainOut f23 tail #connect
ce0 f23 head f1 mainIn #connect
ce0 f0 mainOut f24 tail #connect
ce0 f24 head f9 mainIn #connect
ce0 f15 mainOut f25 tail #connect
ce0 f25 head f19 in #connect
ce0 f14 mainOut f11 tail #connect
ce0 f11 head f19 in #connect
ce0 f19 out f12 tail #connect
ce0 f12 head f7 mainIn #connect
