/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { useRoute } from 'vue-router';
const route = useRoute();
const navItems = [
    { path: '/', label: '路線', icon: 'fas fa-subway' },
    { path: '/map', label: '路線圖', icon: 'fas fa-map' },
    { path: '/favorites', label: '收藏', icon: 'fas fa-star' }
];
const isActive = (path) => route.path === path; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
        ...{ class: ("page-footer") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-around items-center h-14") },
    });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.navItems))) {
        const __VLS_0 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            key: ((item.path)),
            to: ((item.path)),
            ...{ class: ("flex flex-col items-center") },
            ...{ class: (({ 'text-metro-blue': __VLS_ctx.isActive(item.path), 'text-gray-400': !__VLS_ctx.isActive(item.path) })) },
        }));
        const __VLS_2 = __VLS_1({
            key: ((item.path)),
            to: ((item.path)),
            ...{ class: ("flex flex-col items-center") },
            ...{ class: (({ 'text-metro-blue': __VLS_ctx.isActive(item.path), 'text-gray-400': !__VLS_ctx.isActive(item.path) })) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: ((['text-xl mb-1', item.icon])) },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("text-xs") },
        });
        (item.label);
        __VLS_5.slots.default;
        var __VLS_5;
    }
    ['page-footer', 'flex', 'justify-around', 'items-center', 'h-14', 'flex', 'flex-col', 'items-center', 'text-metro-blue', 'text-gray-400', 'text-xl', 'mb-1', 'text-xs',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            navItems: navItems,
            isActive: isActive,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=MetroNav.vue.js.map