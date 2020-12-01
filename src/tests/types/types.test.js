import { types } from '../../types/types'

describe('Pruebas con nuestros types', () => {
    test('should have this types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',

            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',

            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',

            notesAddNew: '[Notes] New Note',
            notesActive: '[Notes] Set Active note',
            notesLoad: '[Notes] Load Notes',
            notesUpdate: '[Notes] Update Note',
            notesFileUrl: '[Notes] Update image url',
            notesDelete: '[Notes] Delete Note',
            notesLogoutCleaninng: '[Notes] Logout Cleaning',
        })
    })

})