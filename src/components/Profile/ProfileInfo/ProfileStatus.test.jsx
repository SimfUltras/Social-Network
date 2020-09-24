import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatusComponent', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const instance = component.getInstance(); 
        expect(instance.state.status).toBe('it-kamasutra.com');
    });
        test('auto creation <span> should be displayed with status', () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const root = component.root; 
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });
        test('auto creation <input> should not be displayed', () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const root = component.root; 
        expect(()=>{
            let input = root.findByType('input');
        }).toThrow();
    });
        test('auto creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const root = component.root(); 
        let span = root.findByType('span');
        expect(span.children[0]).toBe('it-kamasutra.com');
    });
        test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const root = component.root(); 
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('it-kamasutra.com');
    });
        test('callback should be called', () => {
        const nockCallback = jest.fn();
        const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={nockCallback}/>);
        const instance = component.getInstance(); 
        instance.deactivateEditMode();
        expect(nockCallback.mock.calls.length).toBe(1);
    });
});
