import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from '../forms/ErrorMessage';



function AppFormPicker({items, placeholder, name, width, PickerItemComponent, numberOfColumns}) {
    const {errors, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
            <AppPicker
                numberOfColumns={numberOfColumns}
                items={items}
                placeholder={placeholder}
                selectedItem = {values[name]}
                onSelectedItem = {(item) => setFieldValue(name, item)}
                width={width}
                PickerItemComponent={PickerItemComponent}
            />
            <ErrorMessage 
                error={errors[name]} visible={touched[name]}
            />
        </>
    );
}

export default AppFormPicker;

