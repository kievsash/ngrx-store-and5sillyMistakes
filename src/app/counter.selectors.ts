import { createSelector, createFeatureSelector } from '@ngrx/store';

export const featureKey = 'someFeature';

export interface FeatureState {
  count: number;
}

export interface AppState {
  someFeature: FeatureState;
}

export const selectFeature = createFeatureSelector<AppState, FeatureState>(featureKey);

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => state.count
);
