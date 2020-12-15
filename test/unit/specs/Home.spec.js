import Home from '@/components/Home'
import { shallowMount } from '@vue/test-utils';



describe('Home', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(Home);

    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
