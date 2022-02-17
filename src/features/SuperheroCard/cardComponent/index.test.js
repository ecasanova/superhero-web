import React from 'react';
import {unmountComponentAtNode, render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {fireEvent} from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import Card from '../cardComponent';
import thunk from 'redux-thunk';
import * as redux from 'react-redux';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {screen} from '@testing-library/react';

const middlewares = [thunk];
const initialState = {id: 1};

const mockStore = configureMockStore(middlewares);

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const mockDispatch = jest.fn();
const spyMyTeamSelector = jest.spyOn(redux, 'useSelector');
spyMyTeamSelector.mockReturnValue([]);

const mockupHero = {
  id: '69',
  name: 'Batman',
  powerstats: {
    intelligence: '81',
    strength: '40',
    speed: '29',
    durability: '55',
    power: '63',
    combat: '90',
  },
  biography: {
    'full-name': 'Terry McGinnis',
    'alter-egos': 'No alter egos found.',
    aliases: [
      'Batman II',
      'The Tomorrow Knight',
      'The second Dark Knight',
      'The Dark Knight of Tomorrow',
      'Batman Beyond',
    ],
    'place-of-birth': 'Gotham City, 25th Century',
    'first-appearance': 'Batman Beyond #1',
    publisher: 'DC Comics',
    alignment: 'good',
  },
  appearance: {
    gender: 'Male',
    race: 'Human',
    height: ["5'10", '178 cm'],
    weight: ['170 lb', '77 kg'],
    'eye-color': 'Blue',
    'hair-color': 'Black',
  },
  work: {
    occupation: '-',
    base: '21st Century Gotham City',
  },
  connections: {
    'group-affiliation': 'Batman Family, Justice League Unlimited',
    relatives:
      'Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)',
  },
  image: {
    url: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
  },
};

const spyMyTeamDispatch = jest.spyOn(redux, 'useDispatch');
spyMyTeamDispatch.mockReturnValue([mockupHero]);

it('renders a super hero card without data', () => {
  act(() => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router>
          <Card />
        </Router>
      </Provider>,
      container,
    );
  });
  expect(container.textContent).toBe('');
});

it('should display the name of the superhero', () => {
  act(() => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router>
          <Card superhero={mockupHero} />
        </Router>
      </Provider>,
      container,
    );
  });

  expect(container.querySelector('.c-card__card-title').textContent).toBe(
    'Batman',
  );
});

it('should display stats when the up arrow toggle at the bottom is clicked', () => {
  act(() => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router>
          <Card superhero={mockupHero} />
        </Router>
      </Provider>,
      container,
    );
  });
  fireEvent.click(container.querySelector('.c-card__arrow-circle'));

  expect(container.querySelector('.c-card__card-power').textContent).toBe(
    'intelligence: 81',
  );
});

it('should display a down arrow toggle when the toggle at the bottom is clicked ', () => {
  act(() => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router>
          <Card superhero={mockupHero} />
        </Router>
      </Provider>,
      container,
    );
  });
  fireEvent.click(container.querySelector('.c-card__arrow-circle'));

  expect(
    container
      .querySelector('.c-card__arrow-circle')
      .classList.contains('anticon-down-circle'),
  ).toBe(true);
});

it('should be accessible via keyboard to Add to Team', () => {
  act(() => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router>
          <Card superhero={mockupHero} />
        </Router>
      </Provider>,
      container,
    );
  });

  const title = container.querySelector('.c-card__card-title > a');
  const switchButton = container.querySelector('[role="switch"]');

  userEvent.tab();
  userEvent.tab();
  expect(title).toHaveFocus();

  userEvent.tab();
  expect(switchButton).toHaveFocus();
});

it('should be accessible via keyboard to see the superhero stats via the toggle at the bottom', () => {
  act(() => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router>
          <Card superhero={mockupHero} />
        </Router>
      </Provider>,
      container,
    );
  });

  const title = container.querySelector('.c-card__card-title > a');
  const toggleButton = container.querySelector('.c-card__arrow-circle');

  title.focus();
  expect(title).toHaveFocus();

  userEvent.tab();
  userEvent.tab();
  expect(toggleButton).toHaveFocus();
});

/* screen reader should read the superhero name on focus */
it('screen reader should read the superhero name on focus', () => {
  act(() => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router>
          <Card superhero={mockupHero} />
        </Router>
      </Provider>,
      container,
    );
  });
  const title = container.querySelector('.c-card__card-title > a');

  title.focus();
  expect(title.title).toBe(mockupHero.name);
});

/*
it('should have the correct border style when hovering with a mouse', () => {
  act(() => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router>
          <Card superhero={mockupHero} />
        </Router>
      </Provider>,
      container,
    );
  });

  const card = container.querySelector('.c-card');
  fireEvent.mouseOver(card);
  expect(card).toHaveStyle(`border: 4px solid orange;`);
});


it('should toggle selected when the switch is clicked', () => {
  act(() => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router>
          <Card superhero={mockupHero} />
        </Router>
      </Provider>,
      container,
    );
  });

  const switchButton = container.querySelector('[role="switch"]');
  fireEvent.change(switchButton, {checked: true});
  redux.useDispatch.mockReturnValue(spyMyTeamDispatch);

  expect(switchButton).toHaveClass('ant-switch-checked');
});
*/
