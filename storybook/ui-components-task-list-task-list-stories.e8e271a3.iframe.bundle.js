(self.webpackChunkgymbox=self.webpackChunkgymbox||[]).push([[66,765],{"./src/app/ui-components/task/task.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>TaskComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,task_componentngResource=__webpack_require__("./src/app/ui-components/task/task.component.css?ngResource"),task_componentngResource_default=__webpack_require__.n(task_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let TaskComponent=((_class=class TaskComponent{constructor(){this.task={id:"default-task-id",state:"TASK_NEW",title:"default-task-name"},this.onPinTask=new core.EventEmitter,this.onArchiveTask=new core.EventEmitter}onPin(id){this.onPinTask.emit(id)}onArchive(id){this.onArchiveTask.emit(id)}}).propDecorators={task:[{type:core.Input}],onPinTask:[{type:core.Output}],onArchiveTask:[{type:core.Output}]},_class);TaskComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-task",template:'<div class="list-item {{ task.state }}">\n  <label\n    [attr.aria-label]="\'archiveTask-\' + task.id"\n    for="checked-{{ task.id }}"\n    class="checkbox"\n  >\n    <input\n      type="checkbox"\n      disabled=disabled\n      [defaultChecked]="task.state === \'TASK_ARCHIVED\'"\n      name="checked-{{ task.id }}"\n      id="checked-{{ task.id }}"\n    />\n    <span class="checkbox-custom" (click)="onArchive(task.id)"></span>\n  </label>\n  <label\n    [attr.aria-label]="task.title + \'\'"\n    for="title-{{ task.id }}"\n    class="title"\n  >\n    <input\n      type="text"\n      [value]="task.title"\n      readonly=readonly\n      id="title-{{ task.id }}"\n      name="title-{{ task.id }}"\n      placeholder="Input title"\n    />\n  </label>\n  <span *ngIf="task.state === \'TASK_PINNED\'" class="task_pinned">Pinned</span>\n\n\n  <button\n    *ngIf=" task.state !==\n  \'TASK_ARCHIVED\'"\n    class="pin-button"\n    [attr.aria-label]="\'pinTask-\' + task.id"\n    (click)="onPin(task.id)"\n  >\n    S\n  </button>\n</div>\n',styles:[task_componentngResource_default()]})],TaskComponent)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const core_client_1=__webpack_require__("@storybook/core-client"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,core_client_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/ui-components/task-list/task-list.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/ui-components/task/task.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/ui-components/task-list/task-list.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Empty:()=>Empty,Loading:()=>Loading,WithPinnedTasks:()=>WithPinnedTasks,default:()=>task_list_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,task_list_componentngResource=__webpack_require__("./src/app/ui-components/task-list/task-list.component.css?ngResource"),task_list_componentngResource_default=__webpack_require__.n(task_list_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let TaskListComponent=((_class=class TaskListComponent{constructor(){this.tasksInOrder=[],this.loading=!1,this.onPinTask=new core.EventEmitter,this.onArchiveTask=new core.EventEmitter}set tasks(arr){const filteredTasks=[...arr.filter((t=>"TASK_PINNED"===t.state)),...arr.filter((t=>"TASK_PINNED"!==t.state))].filter((t=>"TASK_INBOX"===t.state||"TASK_PINNED"===t.state));this.tasksInOrder=filteredTasks.filter((t=>"TASK_INBOX"===t.state||"TASK_PINNED"===t.state))}}).propDecorators={loading:[{type:core.Input}],onPinTask:[{type:core.Output}],onArchiveTask:[{type:core.Output}]},_class);TaskListComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-task-list",template:'<div class="list-items">\n  <app-task\n    *ngFor="let task of tasksInOrder"\n    [task]="task"\n    (onArchiveTask)="onArchiveTask.emit($event)"\n    (onPinTask)="onPinTask.emit($event)"\n  >\n  </app-task>\n  <div *ngIf="tasksInOrder.length === 0 && !loading">You have no tasks</div>\n\n  <div *ngIf="loading">\n\n    <div *ngFor="let i of [1, 2, 3, 4, 5, 6]" class="loading-item">\n        <span class="glow-checkbox"></span>\n        <span class="glow-text">\n          <span>Loading</span> <span>cool</span> <span>state</span>\n        </span>\n      </div>\n\n  </div>\n\n</div>\n',styles:[task_list_componentngResource_default()]})],TaskListComponent);var task_component=__webpack_require__("./src/app/ui-components/task/task.component.ts"),task_stories=__webpack_require__("./src/app/ui-components/task/task.stories.ts");const task_list_stories={component:TaskListComponent,decorators:[(0,dist.moduleMetadata)({declarations:[TaskListComponent,task_component.m],imports:[common.CommonModule]}),(0,dist.componentWrapperDecorator)((story=>`<div style="margin: 3em">${story}</div>`))],title:"TaskList"},Template=args=>({props:{...args,onPinTask:task_stories.actionsData.onPinTask,onArchiveTask:task_stories.actionsData.onArchiveTask}}),Default=Template.bind({});Default.args={tasks:[{...task_stories.Default.args?.task,id:"1",title:"Task 1"},{...task_stories.Default.args?.task,id:"2",title:"Task 2"},{...task_stories.Default.args?.task,id:"3",title:"Task 3"},{...task_stories.Default.args?.task,id:"4",title:"Task 4"},{...task_stories.Default.args?.task,id:"5",title:"Task 5"},{...task_stories.Default.args?.task,id:"6",title:"Task 6"}]};const WithPinnedTasks=Template.bind({});WithPinnedTasks.args={tasks:[...Default.args.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]};const Loading=Template.bind({});Loading.args={tasks:[],loading:!0};const Empty=Template.bind({});Empty.args={...Loading.args,loading:!1},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    onPinTask: TaskStories.actionsData.onPinTask,\n    onArchiveTask: TaskStories.actionsData.onArchiveTask\n  }\n})",...Default.parameters?.docs?.source}}},WithPinnedTasks.parameters={...WithPinnedTasks.parameters,docs:{...WithPinnedTasks.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    onPinTask: TaskStories.actionsData.onPinTask,\n    onArchiveTask: TaskStories.actionsData.onArchiveTask\n  }\n})",...WithPinnedTasks.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    onPinTask: TaskStories.actionsData.onPinTask,\n    onArchiveTask: TaskStories.actionsData.onArchiveTask\n  }\n})",...Loading.parameters?.docs?.source}}},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    onPinTask: TaskStories.actionsData.onPinTask,\n    onArchiveTask: TaskStories.actionsData.onArchiveTask\n  }\n})",...Empty.parameters?.docs?.source}}}},"./src/app/ui-components/task/task.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Archived:()=>Archived,Default:()=>Default,Pinned:()=>Pinned,actionsData:()=>actionsData,default:()=>task_stories});var chunk_NX5DM7EF=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-NX5DM7EF.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-27H5MDCK.mjs");const task_stories={component:__webpack_require__("./src/app/ui-components/task/task.component.ts").m,title:"Task",excludeStories:/.*Data$/},actionsData={onPinTask:(0,chunk_NX5DM7EF.aD)("onPinTask"),onArchiveTask:(0,chunk_NX5DM7EF.aD)("onArchiveTask")},Template=args=>({props:{...args,onPinTask:actionsData.onPinTask,onArchiveTask:actionsData.onArchiveTask}}),Default=Template.bind({});Default.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX"}};const Pinned=Template.bind({});Pinned.args={task:{...Default.args.task,state:"TASK_PINNED"}};const Archived=Template.bind({});Archived.args={task:{...Default.args.task,state:"TASK_ARCHIVED"}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    onPinTask: actionsData.onPinTask,\n    onArchiveTask: actionsData.onArchiveTask\n  }\n})",...Default.parameters?.docs?.source}}},Pinned.parameters={...Pinned.parameters,docs:{...Pinned.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    onPinTask: actionsData.onPinTask,\n    onArchiveTask: actionsData.onArchiveTask\n  }\n})",...Pinned.parameters?.docs?.source}}},Archived.parameters={...Archived.parameters,docs:{...Archived.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    onPinTask: actionsData.onPinTask,\n    onArchiveTask: actionsData.onArchiveTask\n  }\n})",...Archived.parameters?.docs?.source}}}}}]);