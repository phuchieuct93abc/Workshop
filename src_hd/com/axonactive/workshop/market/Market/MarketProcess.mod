[Ivy]
1656790AF788BF03 3.20 #module
>Proto >Proto Collection #zClass
Ms0 MarketProcess Big #zClass
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
Ms0 @RichDialogProcessStart f3 '' #zField
Ms0 @RichDialogEnd f4 '' #zField
Ms0 @PushWFArc f5 '' #zField
Ms0 @GridStep f6 '' #zField
Ms0 @PushWFArc f7 '' #zField
Ms0 @PushWFArc f2 '' #zField
>Proto Ms0 Ms0 MarketProcess #zField
Ms0 f0 guid 1656790AF9DE5615 #txt
Ms0 f0 type com.axonactive.workshop.market.Market.MarketData #txt
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
Ms0 f1 type com.axonactive.workshop.market.Market.MarketData #txt
Ms0 f1 371 51 26 26 0 12 #rect
Ms0 f1 @|RichDialogProcessEndIcon #fIcon
Ms0 f3 guid 1656790AFB26010F #txt
Ms0 f3 type com.axonactive.workshop.market.Market.MarketData #txt
Ms0 f3 actionDecl 'com.axonactive.workshop.market.Market.MarketData out;
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
Ms0 f4 type com.axonactive.workshop.market.Market.MarketData #txt
Ms0 f4 guid 1656790AFB3AE287 #txt
Ms0 f4 211 147 26 26 0 12 #rect
Ms0 f4 @|RichDialogEndIcon #fIcon
Ms0 f5 expr out #txt
Ms0 f5 109 160 211 160 #arcP
Ms0 f6 actionDecl 'com.axonactive.workshop.market.Market.MarketData out;
' #txt
Ms0 f6 actionTable 'out=in;
' #txt
Ms0 f6 actionCode 'import com.axonactive.workshop.market.MarketController;
out.stocks = MarketController.getStocksMultithreading();

' #txt
Ms0 f6 type com.axonactive.workshop.market.Market.MarketData #txt
Ms0 f6 @C|.xml '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<elementInfo>
    <language>
        <name>Init</name>
        <nameStyle>4,7
</nameStyle>
    </language>
</elementInfo>
' #txt
Ms0 f6 192 42 112 44 -8 -8 #rect
Ms0 f6 @|StepIcon #fIcon
Ms0 f7 expr out #txt
Ms0 f7 109 64 192 64 #arcP
Ms0 f2 expr out #txt
Ms0 f2 304 64 371 64 #arcP
>Proto Ms0 .type com.axonactive.workshop.market.Market.MarketData #txt
>Proto Ms0 .processKind HTML_DIALOG #txt
>Proto Ms0 -8 -8 16 16 16 26 #rect
>Proto Ms0 '' #fIcon
Ms0 f3 mainOut f5 tail #connect
Ms0 f5 head f4 mainIn #connect
Ms0 f0 mainOut f7 tail #connect
Ms0 f7 head f6 mainIn #connect
Ms0 f6 mainOut f2 tail #connect
Ms0 f2 head f1 mainIn #connect
