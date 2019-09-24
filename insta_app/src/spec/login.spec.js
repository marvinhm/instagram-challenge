import React, { Component } from 'react';
import Login from '../lib/login';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Login component', () => {
    it('Display a welcome page', () => {
        const wrapper = shallow(<Login />)
        const text = wrapper.find('h1').text()

        expect(text).toEqual("Login")
    })

    it('label for name input should exist', () => {
        const wrapper = shallow(<Login />)
        const label = wrapper.find('form label').text()

        expect(label).toEqual("Name")
    })

    it('name input should exist', () => {
        const wrapper = shallow(<Login />)
        // const input = wrapper.find('form input');
        // const btn = wrapper.find
        // btn.simulate('focus');
        // input.simulate('change', { target: { value: 'User1' } });
        // incrementBtn.simulate('click')

        expect(wrapper.exists('form input.name')).toEqual(true);
    })

    // it('Starts with sign up page', () => {
    //     const wrapper = shallow(<User />)
    //     const 
    // })
})