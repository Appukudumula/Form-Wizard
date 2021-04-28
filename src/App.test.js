import React from 'react';
import App from "./App";
import EmailForm from "./FormWizard/components/EmailForm";
import { shallow } from "enzyme";
import MainForm from './FormWizard/components/MainForm';
import CompletedForm from './FormWizard/components/CompletedForm';
import PersonalDetailsForm from './FormWizard/components/PersonalDetailsForm';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore()
const store = mockStore()

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
  it("renders App component header without crashing", () => {
    const wrapper = shallow(<App />);
    const header = (<MainForm />);
    expect(wrapper.contains(header)).toEqual(true);
  });
  it("renders EmailForm component without crashing", () => {
    shallow(<Provider store={store}>
      <EmailForm />
    </Provider>);
  });
  it("renders MainForm component without crashing", () => {
    shallow(<Provider store={store}>
      <MainForm />
    </Provider>);
  });
  it("renders CompletedForm component without throwing an error", () => {
    shallow(<Provider store={store}>
      <CompletedForm />
    </Provider>);
  });
  it("renders PersonalDetailsForm component without crashing", () => {
    shallow(<Provider store={store}>
      <PersonalDetailsForm />
    </Provider>);
  });
})

describe("snapshots", () => {
  it("App snapshots", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  })
  it("EmailForm snapshots", () => {
    const emailFormTree = shallow(<Provider store={store}>
      <EmailForm />
    </Provider>);
    expect(toJson(emailFormTree)).toMatchSnapshot();
  })
  it("MainForm snapshots", () => {
    const mainFormTree = shallow(<Provider store={store}>
      <MainForm />
    </Provider>);
    expect(toJson(mainFormTree)).toMatchSnapshot();
  })
  it("PersonalDetailsForm snapshots", () => {
    const personalDetailsFormTree = shallow(<Provider store={store}>
      <PersonalDetailsForm />
    </Provider>);
    expect(toJson(personalDetailsFormTree)).toMatchSnapshot();
  })
  it("CompletedForm snapshots", () => {
    const completedFormTree = shallow(<Provider store={store}>
      <CompletedForm />
    </Provider>);
    expect(toJson(completedFormTree)).toMatchSnapshot();
  })
})