import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';
import React, { useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useTheme } from '@/theme';
import { CARD_IMAGES } from '@/theme/assets/images';
import { FormErrors } from '@/theme/types/common';
import { Paths } from '@/navigation/paths';

import {
  ZonButton,
  ZonCalendar,
  ZonImage,
  ZonModal,
  ZonSvg,
  ZonText,
  ZonTextAlert,
  ZonTextInput,
} from '@/components/atoms';
import { SafeScreen } from '@/components/templates';

import { handleChangeText, height, validateForm } from '@/utils/common';

interface FormData {
  date: string;
  selectLocation: object | string;
  vehicleList: [{ id: number; name: string; numberPlate: string }];
  selectVehicle: object | string;
}
const vehicleList = [
  {
    id: 1,
    name: 'lamborghini huracan',
    numberPlate: '123ABC',
  },
  {
    id: 2,
    name: 'Nistan GTR',
    numberPlate: '12A',
  },
];

export default function Form() {
  const route = useRoute().params;
  const { gutters, layout, backgrounds, borders } = useTheme();
  const navigation = useNavigation();
  const [openCalender, setOpenCalender] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  console.log('route-----------', JSON.stringify(route, null, 2));

  const [state, setState] = useState<FormData>({
    detail: {
      title: route?.title,
      description: route?.description,
      image: route?.image,
    },
    date: '',
    selectLocation: '',
    selectVehicle: '',
    vehicleList: vehicleList,
  });

  const [errors, setErrors] = useState<FormErrors<FormData>>({
    dateError: false,
    selectLocationError: false,
  });

  const validateFormData = (): boolean => {
    const formData: FormData = {
      date: state?.date,
      selectLocation: state?.selectLocation,
      selectVehicle: state?.selectVehicle,
    };

    const errors = validateForm(formData);
    setErrors((prevState) => ({ ...prevState, ...errors }));
    return Object.keys(errors).length === 0;
  };

  const onSubmit = () => {
    if (validateFormData()) {
      navigation.navigate(Paths.Payment, {
        title: state.detail.title,
        desription: state.detail.description,
        location: state.selectLocation.location,
        image: state.detail.image,
        vehical: state.selectVehicle,
        date: state.date,
      });
    }
  };

  const onChange = React.useCallback((key: keyof FormData, value: string) => {
    handleChangeText(setState, setErrors, key, value);
  }, []);

  const locationList = [
    {
      id: 1,
      title: 'Perfect Spot Auto Spa',
      location: 'Deira, Dubai, United Arab Emirates',
    },
    {
      id: 2,
      title: 'Home Service',
      location: 'Nasa Bldg. Deira, Dubai, UAE',
    },
  ];

  return (
    <SafeScreen backButton={false} noHeader>
      <ScrollView>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={[
            gutters.padding_2,
            gutters.marginLeft_16,
            layout.absolute,
            gutters.padding_6,
            layout.itemsCenter,
            backgrounds.gray50,
            borders.rounded_4,
            gutters.marginTop_20,
            { zIndex: 100 },
          ]}
        >
          <ZonSvg
            name="leftArrow"
            viewStyle={{ width: 18, height: 18, zIndex: 100 }}
          />
        </Pressable>
        <ZonImage
          source={{ uri: route?.image }}
          style={{ width: '100%', height: height / 3.8 }}
          resizeMode="cover"
        />
        <ZonText
          variant="black2"
          fontFamily="bold"
          color="gray800"
          style={[gutters.marginTop_16, gutters.marginLeft_16]}
        >
          {route?.title}
        </ZonText>
        <ZonText variant="sub" color="gray600" style={[gutters.marginLeft_16]}>
          {route?.description}
        </ZonText>
        <View
          style={[
            { height: 8 },
            backgrounds.gray200,
            gutters.marginVertical_10,
          ]}
        />

        <ZonText
          variant="button"
          color="gray800"
          style={[gutters.marginLeft_16]}
        >
          Select Date & Time
        </ZonText>
        <Pressable
          style={[
            layout.row,
            layout.justifyBetween,
            borders.danger300,
            backgrounds.danger100,
            borders.w_1,
            gutters.padding_10,
            gutters.marginHorizontal_16,
            gutters.marginTop_16,
            borders.rounded_8,
          ]}
          onPress={() => {
            setOpenCalender(!openCalender);
          }}
        >
          <ZonText
            variant="button"
            color="gray800"
            style={[gutters.marginLeft_16]}
            fontFamily="bold"
          >
            {state?.date
              ? moment(state?.date).format('DD MMM YYYY-h:mm A')
              : 'Select date'}
          </ZonText>
          <ZonSvg
            name="calendar"
            viewStyle={{
              width: 18,
              height: 18,
              zIndex: 100,
              marginRight: 18,
            }}
          />
        </Pressable>
        <ZonTextAlert
          variant="error"
          label="Please select date"
          showAlert={errors.dateError}
        />
        <ZonCalendar
          isVisible={openCalender}
          onClose={() => setOpenCalender(false)}
          onDayPress={(date) => {
            onChange('date', date);
            setOpenCalender(false);
          }}
          selectedDate={moment(state?.date).format('DD-MMM-YYYY h:mm A')}
          minDate={moment().format('YYYY-MM-DD')}
        />

        <View
          style={[
            { height: 8 },
            backgrounds.gray200,
            gutters.marginVertical_20,
          ]}
        />

        <ZonText
          variant="button"
          color="gray800"
          style={[gutters.marginLeft_16]}
        >
          Please choose preferred location
        </ZonText>
        <ZonTextAlert
          variant="error"
          label="Please select location"
          showAlert={errors.selectLocationError}
        />
        {locationList.map((item) => {
          return (
            <Pressable
              key={item.id}
              style={[
                layout.row,
                layout.justifyBetween,
                layout.itemsCenter,
                borders[
                  state?.selectLocation.id === item.id ? 'danger300' : 'gray300'
                ],
                backgrounds[
                  state?.selectLocation.id === item.id ? 'danger100' : 'white'
                ],
                borders.w_1,
                gutters.padding_10,
                gutters.marginHorizontal_16,
                gutters.marginTop_16,
                borders.rounded_8,
              ]}
              onPress={() => {
                onChange('selectLocation', item);
              }}
            >
              <View>
                <ZonText
                  variant="button"
                  color="gray800"
                  style={[gutters.marginLeft_16]}
                >
                  {item?.title}
                </ZonText>
                <ZonText
                  variant="sub3"
                  color="gray500"
                  style={[gutters.marginLeft_16]}
                >
                  {item?.title}
                </ZonText>
              </View>
              <ZonSvg
                name={
                  state?.selectLocation.id === item.id
                    ? 'radio_button'
                    : 'black_ring'
                }
                viewStyle={{
                  width: 20,
                  height: 20,
                  zIndex: 100,
                  marginRight: 18,
                }}
              />
            </Pressable>
          );
        })}

        <View
          style={[
            { height: 8 },
            backgrounds.gray200,
            gutters.marginVertical_20,
          ]}
        />

        <ZonText
          variant="button"
          color="gray800"
          style={[gutters.marginLeft_16]}
        >
          Please choose your vehicle
        </ZonText>
        <ZonTextAlert
          variant="error"
          label="Please select vehicle"
          showAlert={errors.selectVehicleError}
        />
        {state?.vehicleList.map((item) => {
          return (
            <Pressable
              key={item.id}
              style={[
                layout.row,
                layout.justifyBetween,
                layout.itemsCenter,
                borders[
                  state?.selectVehicle.id === item.id ? 'danger300' : 'gray300'
                ],
                backgrounds[
                  state?.selectVehicle.id === item.id ? 'danger100' : 'white'
                ],
                borders.w_1,
                gutters.padding_10,
                gutters.marginHorizontal_16,
                gutters.marginTop_16,
                borders.rounded_8,
              ]}
              onPress={() => {
                onChange('selectVehicle', item);
              }}
            >
              <View>
                <ZonText
                  variant="button"
                  color="gray800"
                  style={[gutters.marginLeft_16]}
                >
                  {item?.name}
                </ZonText>
                <ZonText
                  variant="sub3"
                  color="gray500"
                  style={[gutters.marginLeft_16]}
                >
                  {item?.numberPlate}
                </ZonText>
              </View>
              <ZonSvg
                name={
                  state?.selectVehicle.id === item.id
                    ? 'radio_button'
                    : 'black_ring'
                }
                viewStyle={{
                  width: 20,
                  height: 20,
                  zIndex: 100,
                  marginRight: 18,
                }}
              />
            </Pressable>
          );
        })}
        <ZonButton
          variant="outlined"
          onPress={() => setIsVisible(true)}
          label="Add new vehicle"
          style={{ width: '90%', alignSelf: 'center', marginVertical: 20 }}
        />
        <View
          style={[
            { height: 8 },
            backgrounds.gray200,
            gutters.marginVertical_20,
          ]}
        />
        <ZonButton
          onPress={onSubmit}
          label="Continue"
          style={{ width: '95%', alignSelf: 'center', marginVertical: 20 }}
        />
      </ScrollView>
      <AddVehicle
        isVisible={isVisible}
        setVisible={setIsVisible}
        setListState={setState}
        listState={state}
      />
    </SafeScreen>
  );
}

interface nestedFormData {
  vehicle: string;
  numberPlate: string;
}

const AddVehicle = ({
  setVisible,
  isVisible,
  listState,
  setListState,
}: {
  setVisible: (value: boolean) => void;
  isVisible: boolean;
  setListState?: any;
  listState?: any;
}) => {
  const { gutters, layout, borders, backgrounds } = useTheme();

  const [loading, setLoading] = useState(false);

  const [state, setState] = useState<nestedFormData>({
    vehicle: '',
    numberPlate: '',
  });

  const [errors, setErrors] = useState<FormErrors<nestedFormData>>({
    vehicleError: false,
    numberPlateError: false,
  });

  const onCloseModal = () => setVisible(false);

  const validateFormData = (): boolean => {
    const formData: Record<string, any> = {
      vehicle: state?.vehicle,
      numberPlate: state?.numberPlate,
    };

    const errors = validateForm(formData);
    setErrors((prevErrors) => ({ ...prevErrors, ...errors }));
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async () => {
    setLoading(true);
    if (validateFormData()) {
      const newId = listState.vehicleList.length + 1; // Simple incremen
      const newVehicle = {
        id: newId, // Auto-generated ID
        name: state.vehicle, // Vehicle name from input
        numberPlate: state.numberPlate, // Number plate from input
      };

      // Update the vehicleList with the new vehicle
      setListState((prevState: any) => ({
        ...prevState,
        vehicleList: [...prevState.vehicleList, newVehicle], // Add the new vehicle
      }));

      setTimeout(() => {
        // Set loading to false after 1.5 seconds
        setLoading(false);
        onCloseModal();
      }, 2000);
    } else {
      setLoading(false);
    }
  };

  const onChange = React.useCallback(
    (key: keyof nestedFormData, value: string) => {
      handleChangeText(setState, setErrors, key, value);
    },
    [],
  );

  return (
    <ZonModal
      isVisible={isVisible}
      onClose={onCloseModal}
      variant={'bottom'}
      containerStyle={{ height: '60%' }}
      swipeThreshold={50}
    >
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, backgroundColor: 'Red' }}
        keyboardShouldPersistTaps="handled"
        keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
      >
        <ZonTextInput
          titleLabel={'Vehicle name'}
          placeholder="vehicle name"
          value={state?.vehicle}
          onChangeText={(text) => {
            onChange('vehicle', text);
          }}
          errorLabel="Please enter the vehicle name"
          error={errors?.vehicleError}
        />

        <ZonTextInput
          keyboardType="number-pad"
          titleLabel={'Number plate'}
          placeholder="vehicle name"
          value={state?.numberPlate}
          onChangeText={(text) => {
            onChange('numberPlate', text);
          }}
          errorLabel="Please enter the number plate"
          error={errors?.numberPlateError}
          style={[gutters.marginTop_20]}
        />
        <View
          style={[
            layout.row,
            gutters.marginTop_40,
            gutters.gap_72,
            layout.absolute,
            { bottom: 30 },
          ]}
        >
          <ZonButton
            onPress={() => {
              onCloseModal();
            }}
            label={'Cancel'}
            variant="outlined"
            style={[layout.flex_1, { height: 40 }]}
          />
          <ZonButton
            loading={loading}
            onPress={() => {
              onSubmit();
            }}
            label={'Add'}
            style={[layout.flex_1, { height: 40 }]}
          />
        </View>
      </KeyboardAwareScrollView>
    </ZonModal>
  );
};
