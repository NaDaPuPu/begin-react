import { useReducer, useCallback } from 'react';
// function useInputs(initialForm) {
//     const [form, setForm] = useState(initialForm);
//     // Change
//     const onChange = useCallback(e => {
//         const { name, value } = e.target;
//         setForm(form => ({ ...form, [name]: value }));
//     }, []);
//     const reset = useCallback(() => setForm(initialForm), [initialForm]);
//     return [form, onChange, reset];
// }
function reducer(state, action) {
    switch(action.type) {
        case 'CHANGE_INPUT':
            return{
                ...state,
                [action.name]: action.value
            };
        case 'RESET_INPUT':
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
            }, {});
        default:
            return state;
    }
}

function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        });
    }, []);

    const reset = useCallback(() => {
        dispatch({
            type: 'RESET_INPUT',
        });
    }, []);

    return [state, onChange, reset];
}

export default useInputs;