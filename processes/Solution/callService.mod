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
ce0 @GridStep f5 '' #zField
ce0 @GridStep f3 '' #zField
ce0 @PushWFArc f6 '' #zField
ce0 @PushWFArc f2 '' #zField
ce0 @PushWFArc f4 '' #zField
ce0 @EndTask f10 '' #zField
ce0 @GridStep f13 '' #zField
ce0 @SignalStartEvent f8 '' #zField
ce0 @EndTask f9 '' #zField
ce0 @SignalStartEvent f7 '' #zField
ce0 @GridStep f15 '' #zField
ce0 @PushWFArc f14 '' #zField
ce0 @PushWFArc f11 '' #zField
ce0 @PushWFArc f16 '' #zField
ce0 @PushWFArc f12 '' #zField
>Proto ce0 ce0 callService #zField
ce0 f0 inParamDecl '<java.lang.String id> param;' #txt
ce0 f0 inParamTable 'out.personId=param.id;
' #txt
ce0 f0 outParamDecl '<com.axonactive.workshop.backend.rest.PersonalInformation result> result;
' #txt
ce0 f0 outParamTable 'result.result=in.result;
' #txt
ce0 f0 actionDecl 'Solution.callServiceData out;
' #txt
ce0 f0 callSignature call(String) #txt
ce0 f0 type Solution.callServiceData #txt
ce0 f0 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>call</name>
        <nameStyle>4,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f0 65 97 30 30 -9 17 #rect
ce0 f0 @|StartSubIcon #fIcon
ce0 f1 type Solution.callServiceData #txt
ce0 f1 593 97 30 30 0 15 #rect
ce0 f1 @|EndSubIcon #fIcon
ce0 f5 actionDecl 'Solution.callServiceData out;
' #txt
ce0 f5 actionTable 'out=in;
' #txt
ce0 f5 actionCode 'import com.axonactive.workshop.backend.rest.Person;
import com.axonactive.workshop.backend.rest.Address;
import com.axonactive.workshop.backend.rest.PersonalInformation;
import com.axonactive.workshop.backend.solution.concurrency.SynThreadManager;



in.result = new PersonalInformation();

Object firstReturn = SynThreadManager.getQueue(in.queueId).take();
Object secondReturn = SynThreadManager.getQueue(in.queueId).take();

SynThreadManager.removeQueue(in.queueId);


if (firstReturn  instanceof Address) {
	in.result.setAddress(firstReturn as Address);
} else {
	in.result.setPerson(firstReturn as Person);
}

if (secondReturn instanceof Address) {
	in.result.setAddress(secondReturn as Address);
} else {
	in.result.setPerson(secondReturn as Person);
}

' #txt
ce0 f5 type Solution.callServiceData #txt
ce0 f5 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>await</name>
        <nameStyle>5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f5 302 90 112 44 -14 -8 #rect
ce0 f5 @|StepIcon #fIcon
ce0 f3 actionDecl 'Solution.callServiceData out;
' #txt
ce0 f3 actionTable 'out=in;
' #txt
ce0 f3 actionCode 'import com.axonactive.workshop.backend.solution.concurrency.SignalTranferData;
import com.axonactive.workshop.backend.solution.concurrency.SynThreadManager;
import com.axonactive.workshop.backend.SignalTransferHelper;


import java.util.concurrent.SynchronousQueue;
import ch.ivyteam.ivy.process.model.value.SignalCode;

in.queueId = SynThreadManager.produceQueue();

SignalTranferData signalData = new SignalTranferData();
signalData.id = in.personId;
signalData.queueId = in.queueId;

SignalTransferHelper signalHelper = SignalTransferHelper.createInstance();
signalHelper.send(new SignalCode("infor:getPerson"), signalData);
signalHelper.send(new SignalCode("infor:getAddress"), signalData);' #txt
ce0 f3 type Solution.callServiceData #txt
ce0 f3 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>trigger singal</name>
        <nameStyle>14,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f3 142 90 112 44 -36 -8 #rect
ce0 f3 @|StepIcon #fIcon
ce0 f6 expr out #txt
ce0 f6 254 112 302 112 #arcP
ce0 f2 expr out #txt
ce0 f2 95 112 142 112 #arcP
ce0 f4 expr out #txt
ce0 f4 414 112 593 112 #arcP
ce0 f10 type Solution.callServiceData #txt
ce0 f10 355 346 30 30 0 15 #rect
ce0 f10 @|EndIcon #fIcon
ce0 f13 actionDecl 'Solution.callServiceData out;
' #txt
ce0 f13 actionTable 'out=in;
' #txt
ce0 f13 actionCode 'import com.axonactive.workshop.backend.rest.RestClient;
import com.axonactive.workshop.backend.rest.Person;
import com.axonactive.workshop.backend.solution.concurrency.SynThreadManager;


Person person = RestClient.getInstance().getPersonById(in.personId);

SynThreadManager.getQueue(in.queueId).put(person);' #txt
ce0 f13 security system #txt
ce0 f13 type Solution.callServiceData #txt
ce0 f13 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>Call get person service</name>
        <nameStyle>23,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f13 138 243 144 44 -63 -8 #rect
ce0 f13 @|StepIcon #fIcon
ce0 f8 actionDecl 'Solution.callServiceData out;
' #txt
ce0 f8 actionCode 'import com.axonactive.workshop.backend.solution.concurrency.SignalTranferData;
import com.axonactive.workshop.backend.SignalTransferHelper;
SignalTranferData signalData = SignalTransferHelper.createInstance().toSignalData(signal.getSignalData() as String, SignalTranferData.class) as SignalTranferData;
out.personId = signalData.id;
out.queueId = signalData.queueId;
' #txt
ce0 f8 type Solution.callServiceData #txt
ce0 f8 signalCode infor:getAddress #txt
ce0 f8 attachToBusinessCase true #txt
ce0 f8 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>infor:getAddress</name>
        <nameStyle>16,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f8 67 346 30 30 -45 17 #rect
ce0 f8 @|SignalStartEventIcon #fIcon
ce0 f9 type Solution.callServiceData #txt
ce0 f9 355 250 30 30 0 15 #rect
ce0 f9 @|EndIcon #fIcon
ce0 f7 actionDecl 'Solution.callServiceData out;
' #txt
ce0 f7 actionCode 'import com.axonactive.workshop.backend.solution.concurrency.SignalTranferData;
import com.axonactive.workshop.backend.SignalTransferHelper;
SignalTranferData signalData = SignalTransferHelper.createInstance().toSignalData(signal.getSignalData() as String, SignalTranferData.class) as SignalTranferData;
out.personId = signalData.id;
out.queueId = signalData.queueId;
' #txt
ce0 f7 type Solution.callServiceData #txt
ce0 f7 signalCode infor:getPerson #txt
ce0 f7 attachToBusinessCase true #txt
ce0 f7 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>infor:getPerson</name>
        <nameStyle>15,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f7 67 250 30 30 -42 17 #rect
ce0 f7 @|SignalStartEventIcon #fIcon
ce0 f15 actionDecl 'Solution.callServiceData out;
' #txt
ce0 f15 actionTable 'out=in;
' #txt
ce0 f15 actionCode 'import com.axonactive.workshop.backend.rest.RestClient;
import com.axonactive.workshop.backend.rest.Address;
import com.axonactive.workshop.backend.solution.concurrency.SynThreadManager;


Address address = RestClient.getInstance().getAddressById(in.personId);

SynThreadManager.getQueue(in.queueId).put(address);' #txt
ce0 f15 type Solution.callServiceData #txt
ce0 f15 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>Call get address service</name>
        <nameStyle>24,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f15 138 339 144 44 -66 -8 #rect
ce0 f15 @|StepIcon #fIcon
ce0 f14 expr out #txt
ce0 f14 97 265 138 265 #arcP
ce0 f11 expr out #txt
ce0 f11 282 265 355 265 #arcP
ce0 f16 expr out #txt
ce0 f16 97 361 138 361 #arcP
ce0 f12 expr out #txt
ce0 f12 282 361 355 361 #arcP
>Proto ce0 .type Solution.callServiceData #txt
>Proto ce0 .processKind CALLABLE_SUB #txt
>Proto ce0 0 0 32 24 18 0 #rect
>Proto ce0 @|BIcon #fIcon
ce0 f3 mainOut f6 tail #connect
ce0 f6 head f5 mainIn #connect
ce0 f0 mainOut f2 tail #connect
ce0 f2 head f3 mainIn #connect
ce0 f5 mainOut f4 tail #connect
ce0 f4 head f1 mainIn #connect
ce0 f7 mainOut f14 tail #connect
ce0 f14 head f13 mainIn #connect
ce0 f13 mainOut f11 tail #connect
ce0 f11 head f9 mainIn #connect
ce0 f8 mainOut f16 tail #connect
ce0 f16 head f15 mainIn #connect
ce0 f15 mainOut f12 tail #connect
ce0 f12 head f10 mainIn #connect
