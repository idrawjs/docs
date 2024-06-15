import{_ as s,o as i,c as a,a2 as t,m as e}from"./chunks/framework.PNNbM9mo.js";const F=JSON.parse('{"title":"SVG","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/element/svg.md","filePath":"en-US/element/svg.md"}'),n={name:"en-US/element/svg.md"},h=t(`<h1 id="svg" tabindex="-1">SVG <a class="header-anchor" href="#svg" aria-label="Permalink to &quot;SVG&quot;">​</a></h1><h2 id="svg-1" tabindex="-1">SVG <a class="header-anchor" href="#svg-1" aria-label="Permalink to &quot;SVG&quot;">​</a></h2><p>It is used to render SVG code snippet. The specific type is as follows:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SVG</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;svg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  angle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  detail</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    svg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="svg-detail" tabindex="-1">SVG.detail <a class="header-anchor" href="#svg-detail" aria-label="Permalink to &quot;SVG.detail&quot;">​</a></h2><p>The basic attribute details of the element can be viewed <a href="./info.html#element-s-detail">Element&#39;s Detail #</a>.</p><h3 id="svg-detail-data-type" tabindex="-1">SVG.detail Data-Type <a class="header-anchor" href="#svg-detail-data-type" aria-label="Permalink to &quot;SVG.detail Data-Type&quot;">​</a></h3><p>The Data-Type of <code>SVG.detail</code></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SVGDetail</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  svg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="svg-detail-数据属性内容" tabindex="-1">SVG.detail 数据属性内容 <a class="header-anchor" href="#svg-detail-数据属性内容" aria-label="Permalink to &quot;SVG.detail 数据属性内容&quot;">​</a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Required</th><th>Others</th></tr></thead><tbody><tr><td>svg</td><td>HTML code snippet</td><td><code>string</code></td><td>-</td><td><code>true</code></td><td>-</td></tr></tbody></table><h2 id="完整数据示例" tabindex="-1">完整数据示例 <a class="header-anchor" href="#完整数据示例" aria-label="Permalink to &quot;完整数据示例&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> elementSVG</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;svg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  x: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">160</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  y: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  w: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  h: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  angle: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;svg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  detail: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    svg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`&lt;svg  viewBox=&quot;0 0 1024 1024&quot; version=&quot;1.1&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;  width=&quot;400&quot; height=&quot;400&quot;&gt;&lt;path d=&quot;M512 1013.76c-277.11488 0-501.76-224.64512-501.76-501.76S234.88512 10.24 512 10.24s501.76 224.64512 501.76 501.76-224.64512 501.76-501.76 501.76z m0-51.02592c248.9344 0 450.73408-201.79968 450.73408-450.73408 0-248.9344-201.79968-450.73408-450.73408-450.73408-248.9344 0-450.73408 201.79968-450.73408 450.73408 0 248.9344 201.79968 450.73408 450.73408 450.73408zM456.9856 637.9008l295.45984-339.94752a26.4192 26.4192 0 0 1 37.59616-2.31936 28.32896 28.32896 0 0 1 3.10784 38.8608l-307.01568 380.38016a30.72 30.72 0 0 1-42.90048 4.84864L235.44832 556.2368a32.128 32.128 0 0 1-5.74976-44.6464 32.1536 32.1536 0 0 1 44.544-6.58944l182.74304 132.90496z&quot; fill=&quot;#1890ff&quot;&gt;&lt;/path&gt;&lt;/svg&gt;\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="demo-preview" tabindex="-1">Demo Preview <a class="header-anchor" href="#demo-preview" aria-label="Permalink to &quot;Demo Preview&quot;">​</a></h2><p><a href="https://idrawjs.com/playground/?demo=elem-svg" target="_blank" rel="noreferrer">More Demo &gt;&gt;</a></p>`,15),l=e("iframe",{class:"idraw-playground-preview",src:"https://idrawjs.com/playground/?demo=elem-svg&header=false&sider=false&default-editor-split=50",width:"1000",height:"540",frameborder:"no",border:"0",style:{border:"1px solid #cecece",margin:"0px auto"}},null,-1),p=[h,l];function k(d,r,E,g,o,c){return i(),a("div",null,p)}const u=s(n,[["render",k]]);export{F as __pageData,u as default};