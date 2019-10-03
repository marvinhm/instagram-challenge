import React, { Component } from 'react';
import User from '../components/user';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('User component', () => {
    it('Display a welcome page', () => {
        const wrapper = shallow(<User />)
        const text = wrapper.find('h1').text()

        expect(text).toEqual("Welcome to Instagram")
    })

    it('Should render a login component', () => {
        const wrapper = shallow(<User />)
        const loginComponent = wrapper.find('Login')
        // const mountRender = mount(<User />)

        // console.log('Shallow HTML', shallowRender.debug())
        // console.log('Mount HTML', mountRender.debug())

        expect(loginComponent.length).toEqual(1)
    })
})