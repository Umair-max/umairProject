import React, {useState} from 'react';
import { StyleSheet} from 'react-native';
import * as Yup from 'yup';

import listingsApi from '../api/listings';
import Screen from '../components/Screen'
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppFormPicker from '../components/forms/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import colors from '../config/colors';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.string().required().min(1).max(10000).label('Price'),
    category: Yup.object().optional().nullable().label('Category'),
    description: Yup.string().optional().label('Description'),
    images: Yup.array().min(1, 'Please select atleast one image')
});

const categories = [
    {
        label: 'Furniture', 
        value: 1, backgroundColor: 
        colors.primaryRed, 
        iconSource: require('../assets/exit.png')},
    {
        label: 'Clothing', 
        value: 2, backgroundColor: 
        colors.primaryRed, 
        iconSource: require('../assets/plus.png')},
    {
        label: 'Cameras', 
        value: 3, backgroundColor: 
        colors.primaryRed, 
        iconSource: require('../assets/email.png')},
];

function ListingEditScreen(props) {
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing, {resetForm}) => {
        setProgress(0);
        setUploadVisible(true);
        const result = await listingsApi.addListings({...listing},
            progress => setProgress(progress)
            );

        if (!result.ok){
            setUploadVisible(false);
            return alert('Could not submited');
            
        }
        resetForm();
    }

    return (
        <Screen style={styles.container}>
            {/* <UploadScreen progress={progress} visible={setUploadVisible} onDone={setUploadVisible(false)} /> */}
            <AppForm
                initialValues={{
                    title: '',
                    price: '', 
                    category: null, 
                    description: '',
                    images: []
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker 
                    name='images'
                />
                <AppFormField 
                    name='title'
                    placeholder='Title'
                    autoCorrect= 'none'
                    autoCapitalize={false}
                    textContentType='title'
                    maxLenght={255}
                />
                <AppFormField 
                    name='price'
                    placeholder='Price'
                    autoCorrect= 'none'
                    autoCapitalize={false}
                    textContentType='price'
                    keyboardType='numeric'
                    maxLenght={8}
                    width={120}
                />
                <AppFormPicker
                    name='category'
                    placeholder='Category'
                    items={categories}
                    onSelectItem={item => console.log(item.label)}
                    width={'50%'}
                    PickerItemComponent={CategoryPickerItem}
                    numberOfColumns={3}
                />
                <AppFormField 
                    name='description'
                    placeholder='Description'
                    autoCorrect= 'none'
                    autoCapitalize={false}
                    textContentType='description'
                    numberOfLines={3}
                    multiline
                />
                <SubmitButton 
                    title={'POST'}
                />
            </AppForm>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 15
    }
})
export default ListingEditScreen;