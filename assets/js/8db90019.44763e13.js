"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9208],{47630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var a=n(85893),s=n(11151);const r={title:"Does Model and Inference Parameter Matter in LLM Applications? - A Case Study for MATH",authors:"sonichi",tags:["LLM","GPT","research"]},i=void 0,o={permalink:"/autogen/blog/2023/04/21/LLM-tuning-math",source:"@site/blog/2023-04-21-LLM-tuning-math/index.md",title:"Does Model and Inference Parameter Matter in LLM Applications? - A Case Study for MATH",description:"level 2 algebra",date:"2023-04-21T00:00:00.000Z",formattedDate:"April 21, 2023",tags:[{label:"LLM",permalink:"/autogen/blog/tags/llm"},{label:"GPT",permalink:"/autogen/blog/tags/gpt"},{label:"research",permalink:"/autogen/blog/tags/research"}],readingTime:5.015,hasTruncateMarker:!1,authors:[{name:"Chi Wang",title:"Principal Researcher at Microsoft Research",url:"https://www.linkedin.com/in/chi-wang-49b15b16/",imageURL:"https://github.com/sonichi.png",key:"sonichi"}],frontMatter:{title:"Does Model and Inference Parameter Matter in LLM Applications? - A Case Study for MATH",authors:"sonichi",tags:["LLM","GPT","research"]},unlisted:!1,prevItem:{title:"Achieve More, Pay Less - Use GPT-4 Smartly",permalink:"/autogen/blog/2023/05/18/GPT-adaptive-humaneval"}},l={authorsImageUrls:[void 0]},h=[{value:"Experiment Setup",id:"experiment-setup",level:2},{value:"Experiment Results",id:"experiment-results",level:2},{value:"Analysis and Discussion",id:"analysis-and-discussion",level:2},{value:"For Further Reading",id:"for-further-reading",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"level 2 algebra",src:n(37578).Z+"",width:"575",height:"469"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"TL;DR:"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.strong,{children:"Just by tuning the inference parameters like model, number of responses, temperature etc. without changing any model weights or prompt, the baseline accuracy of untuned gpt-4 can be improved by 20% in high school math competition problems."})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.strong,{children:"For easy problems, the tuned gpt-3.5-turbo model vastly outperformed untuned gpt-4 in accuracy (e.g., 90% vs. 70%) and cost efficiency. For hard problems, the tuned gpt-4 is much more accurate (e.g., 35% vs. 20%) and less expensive than untuned gpt-4."})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.strong,{children:"AutoGen can help with model selection, parameter tuning, and cost-saving in LLM applications."})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Large language models (LLMs) are powerful tools that can generate natural language texts for various applications, such as chatbots, summarization, translation, and more. GPT-4 is currently the state of the art LLM in the world. Is model selection irrelevant? What about inference parameters?"}),"\n",(0,a.jsxs)(t.p,{children:["In this blog post, we will explore how model and inference parameter matter in LLM applications, using a case study for ",(0,a.jsx)(t.a,{href:"https://datasets-benchmarks-proceedings.neurips.cc/paper/2021/hash/be83ab3ecd0db773eb2dc1b0a17836a1-Abstract-round2.html",children:"MATH"}),", a benchmark for evaluating LLMs on advanced mathematical problem solving. MATH consists of 12K math competition problems from AMC-10, AMC-12 and AIME. Each problem is accompanied by a step-by-step solution."]}),"\n",(0,a.jsx)(t.p,{children:"We will use AutoGen to automatically find the best model and inference parameter for LLMs on a given task and dataset given an inference budget, using a novel low-cost search & pruning strategy. AutoGen currently supports all the LLMs from OpenAI, such as GPT-3.5 and GPT-4."}),"\n",(0,a.jsx)(t.p,{children:"We will use AutoGen to perform model selection and inference parameter tuning. Then we compare the performance and inference cost on solving algebra problems with the untuned gpt-4. We will also analyze how different difficulty levels affect the results."}),"\n",(0,a.jsx)(t.h2,{id:"experiment-setup",children:"Experiment Setup"}),"\n",(0,a.jsx)(t.p,{children:"We use AutoGen to select between the following models with a target inference budget $0.02 per instance:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"gpt-3.5-turbo, a relatively cheap model that powers the popular ChatGPT app"}),"\n",(0,a.jsx)(t.li,{children:"gpt-4, the state of the art LLM that costs more than 10 times of gpt-3.5-turbo"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"We adapt the models using 20 examples in the train set, using the problem statement as the input and generating the solution as the output. We use the following inference parameters:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"temperature: The parameter that controls the randomness of the output text. A higher temperature means more diversity but less coherence. We search for the optimal temperature in the range of [0, 1]."}),"\n",(0,a.jsx)(t.li,{children:"top_p: The parameter that controls the probability mass of the output tokens. Only tokens with a cumulative probability less than or equal to top-p are considered. A lower top-p means more diversity but less coherence. We search for the optimal top-p in the range of [0, 1]."}),"\n",(0,a.jsx)(t.li,{children:"max_tokens: The maximum number of tokens that can be generated for each output. We search for the optimal max length in the range of [50, 1000]."}),"\n",(0,a.jsx)(t.li,{children:"n: The number of responses to generate. We search for the optimal n in the range of [1, 100]."}),"\n",(0,a.jsx)(t.li,{children:'prompt: We use the template: "{problem} Solve the problem carefully. Simplify your answer as much as possible. Put the final answer in \\boxed{{}}." where {problem} will be replaced by the math problem instance.'}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"In this experiment, when n > 1, we find the answer with highest votes among all the responses and then select it as the final answer to compare with the ground truth. For example, if n = 5 and 3 of the responses contain a final answer 301 while 2 of the responses contain a final answer 159, we choose 301 as the final answer. This can help with resolving potential errors due to randomness. We use the average accuracy and average inference cost as the metric to evaluate the performance over a dataset. The inference cost of a particular instance is measured by the price per 1K tokens and the number of tokens consumed."}),"\n",(0,a.jsx)(t.h2,{id:"experiment-results",children:"Experiment Results"}),"\n",(0,a.jsx)(t.p,{children:"The first figure in this blog post shows the average accuracy and average inference cost of each configuration on the level 2 Algebra test set."}),"\n",(0,a.jsx)(t.p,{children:"Surprisingly, the tuned gpt-3.5-turbo model is selected as a better model and it vastly outperforms untuned gpt-4 in accuracy (92% vs. 70%) with equal or 2.5 times higher inference budget.\nThe same observation can be obtained on the level 3 Algebra test set."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"level 3 algebra",src:n(98712).Z+"",width:"575",height:"469"})}),"\n",(0,a.jsx)(t.p,{children:"However, the selected model changes on level 4 Algebra."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"level 4 algebra",src:n(57255).Z+"",width:"580",height:"469"})}),"\n",(0,a.jsx)(t.p,{children:"This time gpt-4 is selected as the best model. The tuned gpt-4 achieves much higher accuracy (56% vs. 44%) and lower cost than the untuned gpt-4.\nOn level 5 the result is similar."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"level 5 algebra",src:n(44729).Z+"",width:"575",height:"469"})}),"\n",(0,a.jsx)(t.p,{children:"We can see that AutoGen has found different optimal model and inference parameters for each subset of a particular level, which shows that these parameters matter in cost-sensitive LLM applications and need to be carefully tuned or adapted."}),"\n",(0,a.jsxs)(t.p,{children:["An example notebook to run these experiments can be found at: ",(0,a.jsx)(t.a,{href:"https://github.com/microsoft/FLAML/blob/v1.2.1/notebook/autogen_chatgpt.ipynb",children:"https://github.com/microsoft/FLAML/blob/v1.2.1/notebook/autogen_chatgpt.ipynb"}),". The experiments were run when AutoGen was a subpackage in FLAML."]}),"\n",(0,a.jsx)(t.h2,{id:"analysis-and-discussion",children:"Analysis and Discussion"}),"\n",(0,a.jsx)(t.p,{children:"While gpt-3.5-turbo demonstrates competitive accuracy with voted answers in relatively easy algebra problems under the same inference budget, gpt-4 is a better choice for the most difficult problems. In general, through parameter tuning and model selection, we can identify the opportunity to save the expensive model for more challenging tasks, and improve the overall effectiveness of a budget-constrained system."}),"\n",(0,a.jsxs)(t.p,{children:["There are many other alternative ways of solving math problems, which we have not covered in this blog post. When there are choices beyond the inference parameters, they can be generally tuned via ",(0,a.jsx)(t.a,{href:"https://microsoft.github.io/FLAML/docs/Use-Cases/Tune-User-Defined-Function",children:(0,a.jsx)(t.code,{children:"flaml.tune"})}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The need for model selection, parameter tuning and cost saving is not specific to the math problems. The ",(0,a.jsx)(t.a,{href:"https://github.com/Significant-Gravitas/Auto-GPT",children:"Auto-GPT"})," project is an example where high cost can easily prevent a generic complex task to be accomplished as it needs many LLM inference calls."]}),"\n",(0,a.jsx)(t.h2,{id:"for-further-reading",children:"For Further Reading"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2303.04673",children:"Research paper about the tuning technique"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/Use-Cases/enhanced_inference",children:"Documentation about inference tuning"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["Do you have any experience to share about LLM applications? Do you like to see more support or research of LLM optimization or automation? Please join our ",(0,a.jsx)(t.a,{href:"https://aka.ms/autogen-dc",children:"Discord"})," server for discussion."]})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},37578:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/level2algebra-659ba95286432d9945fc89e84d606797.png"},98712:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/level3algebra-94e87a683ac8832ac7ae6f41f30131a4.png"},57255:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/level4algebra-492beb22490df30d6cc258f061912dcd.png"},44729:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/level5algebra-8fba701551334296d08580b4b489fe56.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var a=n(67294);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);