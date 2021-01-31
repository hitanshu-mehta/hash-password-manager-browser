import { VaultItem } from './../models/vault-item';
import { createAction, props, union } from '@ngrx/store';


export const addVaultItemSuccess = createAction(
    '[Vault/Api] Add vault item success',
    props<{vaultItem: VaultItem}>()
);


export const addVaultItemFailure = createAction(
    '[Vault/Api] Add vault item Failure',
    props<{error: any}>()
);

export const removeVaultItemSuccess = createAction(
    '[Vault/Api] Remove vault item Success',
    props<{vaultItem: VaultItem}>()
);


export const removeVaultItemFailure = createAction(
    '[Vault/Api] Remove vault item Failure',
    props<{error: any}>()
);

export const loadVaultSuccess = createAction(
    '[Vault/Api] Load vault Success',
    props<{vaultItems: VaultItem[]}>()
);

export const loadVaultFailure = createAction(
    '[Vault/Api] Load vault Failure',
    props<{error: any}>()
);

export const updateVaultItemSuccess = createAction(
    '[Vault/Api] Update selected vault item Success',
    props<{oldVaultItem: VaultItem; updatedVaultItem: VaultItem}>()
);

export const updateVaultItemFailure = createAction(
    '[Vault/Api] Update selected vault item Failure',
    props<{error: any}>()
);


const all = union({
    addVaultItemSuccess,
    addVaultItemFailure,
    removeVaultItemSuccess,
    removeVaultItemFailure,
    loadVaultSuccess,
    loadVaultFailure
});
export type VaultApiActionsUnion = typeof all;
