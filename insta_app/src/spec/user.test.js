import React, { Component } from 'react';
import User from '../lib/user';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('User component', () => {
    it('Display a welcome page', () => {
        const wrapper = shallow(<User />)
        const text = wrapper.find('h1').text()

        expect(text).toEqual("Welcome to Instagram")
    })

    // it('Starts with sign up page', () => {
    //     const wrapper = shallow(<User />)
    //     const 
    // })
})