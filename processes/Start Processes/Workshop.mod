[Ivy]
164D11E53422D2A9 3.20 #module
>Proto >Proto Collection #zClass
Wp0 Workshop Big #zClass
Wp0 B #cInfo
Wp0 #process
Wp0 @TextInP .resExport .resExport #zField
Wp0 @TextInP .type .type #zField
Wp0 @TextInP .processKind .processKind #zField
Wp0 @AnnotationInP-0n ai ai #zField
Wp0 @MessageFlowInP-0n messageIn messageIn #zField
Wp0 @MessageFlowOutP-0n messageOut messageOut #zField
Wp0 @TextInP .xml .xml #zField
Wp0 @TextInP .responsibility .responsibility #zField
Wp0 @StartRequest f0 '' #zField
Wp0 @EndTask f1 '' #zField
Wp0 @RichDialog f2 '' #zField
Wp0 @PushWFArc f3 '' #zField
Wp0 @PushWFArc f4 '' #zField
Wp0 @StartRequest f5 '' #zField
Wp0 @EndTask f6 '' #zField
Wp0 @RichDialog f7 '' #zField
Wp0 @PushWFArc f8 '' #zField
Wp0 @PushWFArc f9 '' #zField
Wp0 @StartRequest f10 '' #zField
Wp0 @RichDialog f11 '' #zField
Wp0 @EndTask f12 '' #zField
Wp0 @PushWFArc f13 '' #zField
Wp0 @PushWFArc f14 '' #zField
>Proto Wp0 Wp0 Workshop #zField
Wp0 f0 outLink concurrency.ivp #txt
Wp0 f0 type com.axonactive.workshop.Data #txt
Wp0 f0 inParamDecl '<> param;' #txt
Wp0 f0 actionDecl 'com.axonactive.workshop.Data out;
' #txt
Wp0 f0 guid 164D11E537451931 #txt
Wp0 f0 requestEnabled true #txt
Wp0 f0 triggerEnabled false #txt
Wp0 f0 callSignature concurrency() #txt
Wp0 f0 persist false #txt
Wp0 f0 taskData 'TaskTriggered.ROL=Everybody
TaskTriggered.EXTYPE=0
TaskTriggered.EXPRI=2
TaskTriggered.TYPE=0
TaskTriggered.PRI=2
TaskTriggered.EXROL=Everybody' #txt
Wp0 f0 caseData businessCase.attach=true #txt
Wp0 f0 showInStartList 1 #txt
Wp0 f0 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>concurrency</name>
        <nameStyle>11,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Wp0 f0 @C|.responsibility Everybody #txt
Wp0 f0 81 49 30 30 -33 17 #rect
Wp0 f0 @|StartRequestIcon #fIcon
Wp0 f1 type com.axonactive.workshop.Data #txt
Wp0 f1 305 49 30 30 0 15 #rect
Wp0 f1 @|EndIcon #fIcon
Wp0 f2 targetWindow NEW #txt
Wp0 f2 targetDisplay TOP #txt
Wp0 f2 richDialogId com.axonactive.workshop.backend.Concurrency #txt
Wp0 f2 startMethod start() #txt
Wp0 f2 type com.axonactive.workshop.Data #txt
Wp0 f2 requestActionDecl '<> param;' #txt
Wp0 f2 responseActionDecl 'com.axonactive.workshop.Data out;
' #txt
Wp0 f2 responseMappingAction 'out=in;
' #txt
Wp0 f2 isAsynch false #txt
Wp0 f2 isInnerRd false #txt
Wp0 f2 userContext '* ' #txt
Wp0 f2 168 42 112 44 0 -8 #rect
Wp0 f2 @|RichDialogIcon #fIcon
Wp0 f3 expr out #txt
Wp0 f3 111 64 168 64 #arcP
Wp0 f4 expr out #txt
Wp0 f4 280 64 305 64 #arcP
Wp0 f5 outLink multiThread.ivp #txt
Wp0 f5 type com.axonactive.workshop.Data #txt
Wp0 f5 inParamDecl '<> param;' #txt
Wp0 f5 actionDecl 'com.axonactive.workshop.Data out;
' #txt
Wp0 f5 guid 164D120EB7585AFB #txt
Wp0 f5 requestEnabled true #txt
Wp0 f5 triggerEnabled false #txt
Wp0 f5 callSignature multiThread() #txt
Wp0 f5 persist false #txt
Wp0 f5 taskData 'TaskTriggered.ROL=Everybody
TaskTriggered.EXTYPE=0
TaskTriggered.EXPRI=2
TaskTriggered.TYPE=0
TaskTriggered.PRI=2
TaskTriggered.EXROL=Everybody' #txt
Wp0 f5 caseData businessCase.attach=true #txt
Wp0 f5 showInStartList 1 #txt
Wp0 f5 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>multiThread</name>
        <nameStyle>11,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Wp0 f5 @C|.responsibility Everybody #txt
Wp0 f5 81 177 30 30 -33 17 #rect
Wp0 f5 @|StartRequestIcon #fIcon
Wp0 f6 type com.axonactive.workshop.Data #txt
Wp0 f6 305 177 30 30 0 15 #rect
Wp0 f6 @|EndIcon #fIcon
Wp0 f7 targetWindow NEW #txt
Wp0 f7 targetDisplay TOP #txt
Wp0 f7 richDialogId com.axonactive.workshop.backend.MultiThread #txt
Wp0 f7 startMethod start() #txt
Wp0 f7 type com.axonactive.workshop.Data #txt
Wp0 f7 requestActionDecl '<> param;' #txt
Wp0 f7 responseActionDecl 'com.axonactive.workshop.Data out;
' #txt
Wp0 f7 responseMappingAction 'out=in;
' #txt
Wp0 f7 isAsynch false #txt
Wp0 f7 isInnerRd false #txt
Wp0 f7 userContext '* ' #txt
Wp0 f7 168 170 112 44 0 -8 #rect
Wp0 f7 @|RichDialogIcon #fIcon
Wp0 f8 expr out #txt
Wp0 f8 111 192 168 192 #arcP
Wp0 f9 expr out #txt
Wp0 f9 280 192 305 192 #arcP
Wp0 f10 outLink renderBlocking.ivp #txt
Wp0 f10 type com.axonactive.workshop.Data #txt
Wp0 f10 inParamDecl '<> param;' #txt
Wp0 f10 actionDecl 'com.axonactive.workshop.Data out;
' #txt
Wp0 f10 guid 164D122D74B32D48 #txt
Wp0 f10 requestEnabled true #txt
Wp0 f10 triggerEnabled false #txt
Wp0 f10 callSignature renderBlocking() #txt
Wp0 f10 persist false #txt
Wp0 f10 taskData 'TaskTriggered.ROL=Everybody
TaskTriggered.EXTYPE=0
TaskTriggered.EXPRI=2
TaskTriggered.TYPE=0
TaskTriggered.PRI=2
TaskTriggered.EXROL=Everybody' #txt
Wp0 f10 caseData businessCase.attach=true #txt
Wp0 f10 showInStartList 1 #txt
Wp0 f10 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>renderBlocking</name>
        <nameStyle>14,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Wp0 f10 @C|.responsibility Everybody #txt
Wp0 f10 81 305 30 30 -41 17 #rect
Wp0 f10 @|StartRequestIcon #fIcon
Wp0 f11 targetWindow NEW #txt
Wp0 f11 targetDisplay TOP #txt
Wp0 f11 richDialogId com.axonactive.workshop.backend.RenderBlocking #txt
Wp0 f11 startMethod start() #txt
Wp0 f11 type com.axonactive.workshop.Data #txt
Wp0 f11 requestActionDecl '<> param;' #txt
Wp0 f11 responseActionDecl 'com.axonactive.workshop.Data out;
' #txt
Wp0 f11 responseMappingAction 'out=in;
' #txt
Wp0 f11 isAsynch false #txt
Wp0 f11 isInnerRd false #txt
Wp0 f11 userContext '* ' #txt
Wp0 f11 168 298 112 44 0 -8 #rect
Wp0 f11 @|RichDialogIcon #fIcon
Wp0 f12 type com.axonactive.workshop.Data #txt
Wp0 f12 305 305 30 30 0 15 #rect
Wp0 f12 @|EndIcon #fIcon
Wp0 f13 expr out #txt
Wp0 f13 111 320 168 320 #arcP
Wp0 f14 expr out #txt
Wp0 f14 280 320 305 320 #arcP
>Proto Wp0 .type com.axonactive.workshop.Data #txt
>Proto Wp0 .processKind NORMAL #txt
>Proto Wp0 0 0 32 24 18 0 #rect
>Proto Wp0 @|BIcon #fIcon
Wp0 f0 mainOut f3 tail #connect
Wp0 f3 head f2 mainIn #connect
Wp0 f2 mainOut f4 tail #connect
Wp0 f4 head f1 mainIn #connect
Wp0 f5 mainOut f8 tail #connect
Wp0 f8 head f7 mainIn #connect
Wp0 f7 mainOut f9 tail #connect
Wp0 f9 head f6 mainIn #connect
Wp0 f10 mainOut f13 tail #connect
Wp0 f13 head f11 mainIn #connect
Wp0 f11 mainOut f14 tail #connect
Wp0 f14 head f12 mainIn #connect
