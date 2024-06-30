import{_ as i,c as s,o as a,a1 as e,j as l}from"./chunks/framework.DVk8Vg-1.js";const y=JSON.parse('{"title":"getImageBlobURL","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/api/get-image-blob-url.md","filePath":"zh-CN/api/get-image-blob-url.md"}'),t={name:"zh-CN/api/get-image-blob-url.md"},n=e(`<h1 id="getimagebloburl" tabindex="-1">getImageBlobURL <a class="header-anchor" href="#getimagebloburl" aria-label="Permalink to &quot;getImageBlobURL&quot;">​</a></h1><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p><code>getImageBlobURL</code> 从画布中导出图像内容，把画布内容提取到内存<code>Blob</code>里，并生成图片的<code>blobURL</code></p><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><ul><li><code>{object}</code> <code>options</code> 导出图像的配置选项 <ul><li><code>{number}</code> <code>options.devicePixelRatio</code> 设备像素比例，默认为 <code>1</code></li></ul></li></ul><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h2><ul><li><code>{Promise&lt;object&gt;}</code> 返回完整的画布图像数据 <ul><li><code>{string}</code> <code>blobURL</code> 画布图像在内存中的<code>Blob</code>链接</li><li><code>{number}</code> <code>width</code> 导出图像逻辑像素的宽度</li><li><code>{number}</code> <code>height</code> 导出图像逻辑像素的高度</li><li><code>{number}</code> <code>devicePixelRatio</code> 导出图像的设备像素比例</li></ul></li></ul><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { iDraw } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;idraw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  height: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  devicePixelRatio: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> idraw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> iDraw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(app, options);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">blobURL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> idraw.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getImageBlobURL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ devicePixelRatio: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span></code></pre></div><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p><a href="https://idrawjs.com/playground/?demo=api-getImageBlobURL" target="_blank" rel="noreferrer">Demo完整预览 Playground &gt;&gt;</a></p>`,11),h=l("iframe",{class:"idraw-playground-preview",src:"https://idrawjs.com/playground/?demo=api-getImageBlobURL&header=false&sider=false&default-editor-split=50",width:"1000",height:"480",frameborder:"no",border:"0",style:{border:"1px solid #cecece",margin:"0px auto"}},null,-1),p=[n,h];function o(d,r,k,c,g,E){return a(),s("div",null,p)}const u=i(t,[["render",o]]);export{y as __pageData,u as default};
