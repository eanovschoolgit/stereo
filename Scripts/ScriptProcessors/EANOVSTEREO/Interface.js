Content.makeFrontInterface(300, 447);

const var Knob1 = Content.getComponent("Knob1");
const var STEREO1 = Synth.getEffect("STEREO1");
const var STEREO2 = Synth.getEffect("STEREO2");



inline function onKnob1Control(component, value)
{
	STEREO1.setAttribute(STEREO1.Width, value);
	STEREO2.setAttribute(STEREO2.Width, value);
};

Content.getComponent("Knob1").setControlCallback(onKnob1Control);
function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 