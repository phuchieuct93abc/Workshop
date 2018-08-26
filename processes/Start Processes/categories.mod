[Ivy]
16577A33C723DF86 3.20 #module
>Proto >Proto Collection #zClass
cs0 categories Big #zClass
cs0 B #cInfo
cs0 #process
cs0 @TextInP .resExport .resExport #zField
cs0 @TextInP .type .type #zField
cs0 @TextInP .processKind .processKind #zField
cs0 @AnnotationInP-0n ai ai #zField
cs0 @MessageFlowInP-0n messageIn messageIn #zField
cs0 @MessageFlowOutP-0n messageOut messageOut #zField
cs0 @TextInP .xml .xml #zField
cs0 @TextInP .responsibility .responsibility #zField
cs0 @EndTask f3 '' #zField
cs0 @Alternative f4 '' #zField
cs0 @RichDialog f5 '' #zField
cs0 @GridStep f6 '' #zField
cs0 @StartRequest f7 '' #zField
cs0 @RichDialog f9 '' #zField
cs0 @PushWFArc f11 '' #zField
cs0 @PushWFArc f8 '' #zField
cs0 @PushWFArc f12 '' #zField
cs0 @PushWFArc f10 '' #zField
cs0 @PushWFArc f14 '' #zField
cs0 @PushWFArc f0 '' #zField
>Proto cs0 cs0 categories #zField
cs0 f3 type com.axonactive.workshop.categories.CategoriesProcessData #txt
cs0 f3 1135 81 30 30 0 15 #rect
cs0 f3 @|EndIcon #fIcon
cs0 f4 type com.axonactive.workshop.categories.CategoriesProcessData #txt
cs0 f4 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>Finished?</name>
        <nameStyle>9,7
</nameStyle>
    </language>
</elementInfo>
' #txt
cs0 f4 934 80 32 32 -28 -34 #rect
cs0 f4 @|AlternativeIcon #fIcon
cs0 f5 targetWindow NEW #txt
cs0 f5 targetDisplay TOP #txt
cs0 f5 richDialogId com.axonactive.workshop.categories.Categories #txt
cs0 f5 startMethod start(com.axonactive.workshop.categories.CategoriesProcessData) #txt
cs0 f5 type com.axonactive.workshop.categories.CategoriesProcessData #txt
cs0 f5 requestActionDecl '<com.axonactive.workshop.categories.CategoriesProcessData cacheProcess> param;' #txt
cs0 f5 responseActionDecl 'com.axonactive.workshop.categories.CategoriesProcessData out;
' #txt
cs0 f5 responseMappingAction 'out=in;
' #txt
cs0 f5 isAsynch false #txt
cs0 f5 isInnerRd false #txt
cs0 f5 userContext '* ' #txt
cs0 f5 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>Categories</name>
        <nameStyle>10,7
</nameStyle>
    </language>
</elementInfo>
' #txt
cs0 f5 390 74 112 44 -30 -8 #rect
cs0 f5 @|RichDialogIcon #fIcon
cs0 f6 actionDecl 'com.axonactive.workshop.categories.CategoriesProcessData out;
' #txt
cs0 f6 actionTable 'out=in;
' #txt
cs0 f6 type com.axonactive.workshop.categories.CategoriesProcessData #txt
cs0 f6 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>Init Categories</name>
        <nameStyle>15,7
</nameStyle>
    </language>
</elementInfo>
' #txt
cs0 f6 158 74 112 44 -40 -8 #rect
cs0 f6 @|StepIcon #fIcon
cs0 f7 outLink categories.ivp #txt
cs0 f7 type com.axonactive.workshop.categories.CategoriesProcessData #txt
cs0 f7 inParamDecl '<> param;' #txt
cs0 f7 actionDecl 'com.axonactive.workshop.categories.CategoriesProcessData out;
' #txt
cs0 f7 guid 16577A3A2EF338D7 #txt
cs0 f7 requestEnabled true #txt
cs0 f7 triggerEnabled false #txt
cs0 f7 callSignature categories() #txt
cs0 f7 persist false #txt
cs0 f7 taskData 'TaskTriggered.ROL=Everybody
TaskTriggered.EXTYPE=0
TaskTriggered.EXPRI=2
TaskTriggered.TYPE=0
TaskTriggered.PRI=2
TaskTriggered.EXROL=Everybody' #txt
cs0 f7 caseData businessCase.attach=true #txt
cs0 f7 showInStartList 1 #txt
cs0 f7 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>categories.ivp</name>
        <nameStyle>14,5,7
</nameStyle>
    </language>
</elementInfo>
' #txt
cs0 f7 @C|.responsibility Everybody #txt
cs0 f7 71 81 30 30 -38 17 #rect
cs0 f7 @|StartRequestIcon #fIcon
cs0 f9 targetWindow NEW #txt
cs0 f9 targetDisplay TOP #txt
cs0 f9 richDialogId com.axonactive.workshop.categories.FinalStep #txt
cs0 f9 startMethod start(com.axonactive.workshop.categories.CategoriesProcessData) #txt
cs0 f9 type com.axonactive.workshop.categories.CategoriesProcessData #txt
cs0 f9 requestActionDecl '<com.axonactive.workshop.categories.CategoriesProcessData cacheProcess> param;' #txt
cs0 f9 requestMappingAction 'param.cacheProcess=in;
' #txt
cs0 f9 responseActionDecl 'com.axonactive.workshop.categories.CategoriesProcessData out;
' #txt
cs0 f9 responseMappingAction 'out=result.cacheProcess;
' #txt
cs0 f9 isAsynch false #txt
cs0 f9 isInnerRd false #txt
cs0 f9 userContext '* ' #txt
cs0 f9 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>Final Step</name>
        <nameStyle>10,7
</nameStyle>
    </language>
</elementInfo>
' #txt
cs0 f9 638 74 112 44 -27 -8 #rect
cs0 f9 @|RichDialogIcon #fIcon
cs0 f11 expr out #txt
cs0 f11 750 96 934 96 #arcP
cs0 f8 expr out #txt
cs0 f8 270 96 390 96 #arcP
cs0 f12 expr in #txt
cs0 f12 outCond 'in.needToReview == false' #txt
cs0 f12 .xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>YES</name>
        <nameStyle>3,7
</nameStyle>
    </language>
</elementInfo>
' #txt
cs0 f12 966 96 1135 96 #arcP
cs0 f10 expr out #txt
cs0 f10 101 96 158 96 #arcP
cs0 f14 expr out #txt
cs0 f14 502 96 638 96 #arcP
cs0 f0 expr in #txt
cs0 f0 .xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>No</name>
        <nameStyle>2,7
</nameStyle>
    </language>
</elementInfo>
' #txt
cs0 f0 950 112 446 118 #arcP
cs0 f0 1 950 224 #addKink
cs0 f0 2 446 224 #addKink
cs0 f0 1 0.49404761904761907 0 -14 #arcLabel
>Proto cs0 .type com.axonactive.workshop.categories.CategoriesProcessData #txt
>Proto cs0 .processKind NORMAL #txt
>Proto cs0 .xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language/>
</elementInfo>
' #txt
>Proto cs0 0 0 32 24 18 0 #rect
>Proto cs0 @|BIcon #fIcon
cs0 f7 mainOut f10 tail #connect
cs0 f10 head f6 mainIn #connect
cs0 f5 mainOut f14 tail #connect
cs0 f14 head f9 mainIn #connect
cs0 f9 mainOut f11 tail #connect
cs0 f11 head f4 in #connect
cs0 f4 out f12 tail #connect
cs0 f12 head f3 mainIn #connect
cs0 f6 mainOut f8 tail #connect
cs0 f8 head f5 mainIn #connect
cs0 f4 out f0 tail #connect
cs0 f0 head f5 mainIn #connect
