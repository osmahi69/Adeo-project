import Home from '@/components/Home'
import { shallowMount } from '@vue/test-utils';


const wrapper = shallowMount(Home, {
        propsData: {},
        mocks: {},
        stubs: {},
        methods: {},
    });


describe('Component', () => {
    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
});
