// slices/policySlice.js
import { createSlice } from '@reduxjs/toolkit';

// Dummy policies data
const dummyPolicies = [
  {
    id: '101',
    name: 'Comprehensive Car Insurance',
    type: 'Car',
    premium: 500,
    coverage: 'Full coverage including theft, fire, and accidents',
    benefits: ['Roadside assistance', 'Theft protection', 'Accident coverage'],
    terms: 'Covers up to $50,000 in damages. Deductible: $500',
    duration: '1 Year',
    provider: 'ABC Insurance Co.',
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-01T00:00:00Z',
  },
  {
    id: '102',
    name: 'Term Life Insurance',
    type: 'Life',
    premium: 300,
    coverage: 'Life coverage up to $500,000',
    benefits: ['Death benefits', 'Tax-free payout', 'No medical exam required'],
    terms: 'Valid for 10 years, renewable with premium adjustment',
    duration: '10 Years',
    provider: 'XYZ Life Co.',
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-01T00:00:00Z',
  },
  {
    id: '103',
    name: 'Health Insurance Basic Plan',
    type: 'Health',
    premium: 200,
    coverage: 'Covers hospitalization, surgery, and prescriptions',
    benefits: ['Free preventive checkups', 'Low co-pay for medications'],
    terms: 'Up to $100,000 in medical expenses, co-pay: 10%',
    duration: '1 Year',
    provider: 'HealthFirst Inc.',
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-01T00:00:00Z',
  },
];

const initialState = {
  policies: dummyPolicies,
  loading: false,
  error: null,
};

const policySlice = createSlice({
  name: 'policies',
  initialState,
  reducers: {
    fetchPoliciesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPoliciesSuccess: (state, action) => {
      state.policies = action.payload;
      state.loading = false;
    },
    fetchPoliciesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addPolicy: (state, action) => {
      state.policies.push(action.payload);
    },
    removePolicy: (state, action) => {
      state.policies = state.policies.filter(policy => policy.id !== action.payload);
    },
    updatePolicy: (state, action) => {
      const index = state.policies.findIndex(policy => policy.id === action.payload.id);
      if (index !== -1) {
        state.policies[index] = { ...state.policies[index], ...action.payload };
      }
    },
  },
});

export const {
  fetchPoliciesRequest,
  fetchPoliciesSuccess,
  fetchPoliciesFailure,
  addPolicy,
  removePolicy,
  updatePolicy,
} = policySlice.actions;
export default policySlice.reducer;
