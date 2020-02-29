import { createSelector, createFeatureSelector } from '@ngrx/store';

export const featureKey = 'someFeature';

export interface FeatureState {
  items: number;
}

export interface AppState {
  someFeature: FeatureState;
}

export const selectFeature = createFeatureSelector<AppState, FeatureState>(featureKey);

export const selectItems = createSelector(
  selectFeature,
  (state: FeatureState) => state.items
);
