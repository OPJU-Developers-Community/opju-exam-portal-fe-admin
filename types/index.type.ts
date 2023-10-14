export interface UserManagementModalPropType {
    isOpen: boolean,
    handleModalClose: () => void
}

export interface EducationManagementModalPropType {
    isOpen: boolean,
    handleModalClose: () => void,
}

export interface stateType {
    data: object | null,
    apiStatus: 'idle' | 'loading' | 'success' | 'failed',
    message: string
}
