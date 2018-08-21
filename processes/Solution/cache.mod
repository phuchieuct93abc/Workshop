[Ivy]
1651CE2FCAEDF0AE 3.20 #module
>Proto >Proto Collection #zClass
ce0 cache Big #zClass
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
ce0 @StartRequest f0 '' #zField
ce0 @EndTask f1 '' #zField
ce0 @RichDialog f3 '' #zField
ce0 @GridStep f5 '' #zField
ce0 @PushWFArc f6 '' #zField
ce0 @GridStep f7 '' #zField
ce0 @PushWFArc f8 '' #zField
ce0 @PushWFArc f4 '' #zField
ce0 @RichDialog f9 '' #zField
ce0 @PushWFArc f10 '' #zField
ce0 @Alternative f2 '' #zField
ce0 @PushWFArc f11 '' #zField
ce0 @PushWFArc f12 '' #zField
ce0 @PushWFArc f13 '' #zField
>Proto ce0 ce0 cache #zField
ce0 f0 outLink start.ivp #txt
ce0 f0 type com.axonactive.workshop.cache.CacheProcess #txt
ce0 f0 inParamDecl '<> param;' #txt
ce0 f0 actionDecl 'com.axonactive.workshop.cache.CacheProcess out;
' #txt
ce0 f0 guid 1651CE2FCB443263 #txt
ce0 f0 requestEnabled true #txt
ce0 f0 triggerEnabled false #txt
ce0 f0 callSignature start() #txt
ce0 f0 persist false #txt
ce0 f0 taskData 'TaskTriggered.ROL=Everybody
TaskTriggered.EXTYPE=0
TaskTriggered.EXPRI=2
TaskTriggered.TYPE=0
TaskTriggered.PRI=2
TaskTriggered.EXROL=Everybody' #txt
ce0 f0 caseData businessCase.attach=true #txt
ce0 f0 showInStartList 1 #txt
ce0 f0 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>start.ivp</name>
        <nameStyle>9,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f0 @C|.responsibility Everybody #txt
ce0 f0 81 49 30 30 -21 17 #rect
ce0 f0 @|StartRequestIcon #fIcon
ce0 f1 type com.axonactive.workshop.cache.CacheProcess #txt
ce0 f1 1065 49 30 30 0 15 #rect
ce0 f1 @|EndIcon #fIcon
ce0 f3 targetWindow NEW #txt
ce0 f3 targetDisplay TOP #txt
ce0 f3 richDialogId com.axonactive.workshop.cache.Categories #txt
ce0 f3 startMethod start(com.axonactive.workshop.cache.CacheProcess) #txt
ce0 f3 type com.axonactive.workshop.cache.CacheProcess #txt
ce0 f3 requestActionDecl '<com.axonactive.workshop.cache.CacheProcess cacheProcess> param;' #txt
ce0 f3 responseActionDecl 'com.axonactive.workshop.cache.CacheProcess out;
' #txt
ce0 f3 responseMappingAction 'out=in;
' #txt
ce0 f3 isAsynch false #txt
ce0 f3 isInnerRd false #txt
ce0 f3 userContext '* ' #txt
ce0 f3 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>Categories</name>
        <nameStyle>10,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f3 600 42 112 44 -30 -8 #rect
ce0 f3 @|RichDialogIcon #fIcon
ce0 f5 actionDecl 'com.axonactive.workshop.cache.CacheProcess out;
' #txt
ce0 f5 actionTable 'out=in;
' #txt
ce0 f5 type com.axonactive.workshop.cache.CacheProcess #txt
ce0 f5 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>Init Categories</name>
        <nameStyle>15,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f5 168 42 112 44 -40 -8 #rect
ce0 f5 @|StepIcon #fIcon
ce0 f6 expr out #txt
ce0 f6 111 64 168 64 #arcP
ce0 f7 actionDecl 'com.axonactive.workshop.cache.CacheProcess out;
' #txt
ce0 f7 actionTable 'out=in;
' #txt
ce0 f7 actionCode '// ivy.log.fatal("Items: {0}", in.items.get(0));' #txt
ce0 f7 type com.axonactive.workshop.cache.CacheProcess #txt
ce0 f7 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>Log</name>
        <nameStyle>3,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f7 328 42 112 44 -10 -8 #rect
ce0 f7 @|StepIcon #fIcon
ce0 f8 expr out #txt
ce0 f8 280 64 328 64 #arcP
ce0 f4 expr out #txt
ce0 f4 440 64 600 64 #arcP
ce0 f9 targetWindow NEW #txt
ce0 f9 targetDisplay TOP #txt
ce0 f9 richDialogId com.axonactive.workshop.cache.FinalStep #txt
ce0 f9 startMethod start(com.axonactive.workshop.cache.CacheProcess) #txt
ce0 f9 type com.axonactive.workshop.cache.CacheProcess #txt
ce0 f9 requestActionDecl '<com.axonactive.workshop.cache.CacheProcess cacheProcess> param;' #txt
ce0 f9 requestMappingAction 'param.cacheProcess=in;
' #txt
ce0 f9 responseActionDecl 'com.axonactive.workshop.cache.CacheProcess out;
' #txt
ce0 f9 responseMappingAction 'out=result.cacheProcess;
' #txt
ce0 f9 isAsynch false #txt
ce0 f9 isInnerRd false #txt
ce0 f9 userContext '* ' #txt
ce0 f9 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>Final Step</name>
        <nameStyle>10,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f9 760 42 112 44 -27 -8 #rect
ce0 f9 @|RichDialogIcon #fIcon
ce0 f10 expr out #txt
ce0 f10 712 64 760 64 #arcP
ce0 f2 type com.axonactive.workshop.cache.CacheProcess #txt
ce0 f2 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>Finished?</name>
        <nameStyle>9,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f2 944 48 32 32 -28 -34 #rect
ce0 f2 @|AlternativeIcon #fIcon
ce0 f11 expr out #txt
ce0 f11 872 64 944 64 #arcP
ce0 f12 expr in #txt
ce0 f12 outCond 'in.needToReview == false' #txt
ce0 f12 .xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>YES</name>
        <nameStyle>3,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f12 976 64 1065 64 #arcP
ce0 f13 expr in #txt
ce0 f13 .xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>NO</name>
        <nameStyle>2,7
</nameStyle>
    </language>
</elementInfo>
' #txt
ce0 f13 960 80 656 86 #arcP
ce0 f13 1 960 280 #addKink
ce0 f13 2 656 280 #addKink
ce0 f13 1 0.4901315789473684 0 -13 #arcLabel
>Proto ce0 .type com.axonactive.workshop.cache.CacheProcess #txt
>Proto ce0 .processKind NORMAL #txt
>Proto ce0 .xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language/>
</elementInfo>
' #txt
>Proto ce0 0 0 32 24 18 0 #rect
>Proto ce0 @|BIcon #fIcon
ce0 f0 mainOut f6 tail #connect
ce0 f6 head f5 mainIn #connect
ce0 f5 mainOut f8 tail #connect
ce0 f8 head f7 mainIn #connect
ce0 f7 mainOut f4 tail #connect
ce0 f4 head f3 mainIn #connect
ce0 f3 mainOut f10 tail #connect
ce0 f10 head f9 mainIn #connect
ce0 f9 mainOut f11 tail #connect
ce0 f11 head f2 in #connect
ce0 f2 out f12 tail #connect
ce0 f12 head f1 mainIn #connect
ce0 f2 out f13 tail #connect
ce0 f13 head f3 mainIn #connect
