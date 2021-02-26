#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
	gl_FragColor = vec4(st.y*-1.0+1.0,st.x+0.5,0.7,0.8);
	// gl_FragColor = vec4(abs(sin(u_time)),abs(sin(u_mouse.xy)),1.0);
}