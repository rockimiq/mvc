#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

uniform sampler2D u_tex_1;
uniform sampler2D u_tex_2;
uniform sampler2D u_tex_3;
uniform sampler2D u_tex_4;
uniform sampler2D u_tex_5;
uniform sampler2D u_tex_6;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec4 color = vec4(0.);

    // TexParameter(u_tex_2, TEXTURE_MIN_FILTER, NEAREST);
    // TexParameter(u_tex_2, TEXTURE_MAG_FILTER, NEAREST);

    if (st.x < 0.5)
    {
        color = texelFetch(u_tex_2, st, 0);
    }
    else if (st.x < 1.0)
    {
        color = texture2D(u_tex_2, st);
    }

    gl_FragColor = color;
}
