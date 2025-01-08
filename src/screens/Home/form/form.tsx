import { format } from 'path';
import { title } from 'process';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useTheme } from '@/theme';
import { CARD_IMAGES } from '@/theme/assets/images';
import { FormErrors } from '@/theme/types/common';

import {
  ZonButton,
  ZonCalendar,
  ZonImage,
  ZonModal,
  ZonSvg,
  ZonText,
} from '@/components/atoms';
import { SafeScreen } from '@/components/templates';

import {
  handleChangeText,
  height,
  validateForm,
  ValidationRules,
} from '@/utils/common';

interface FormData {
  date: string;
  selectLocation: object;
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
  const { gutters, layout, backgrounds, borders } = useTheme();
  const navigation = useNavigation();
  const [openCalender, setOpenCalender] = useState(false);

  const [state, setState] = useState<FormData>({
    date: '',
    selectLocation: '',
    selectVehicle: '',
    vehicleList: vehicleList,
  });

  const [erorrs, setErrors] = useState<FormErrors<FormData>>({
    dateError: false,
    selectLocationError: false,
  });

  const validateFormData = (): boolean => {
    const formData: FormData = {
      date: state?.date,
      selectLocation: state?.selectLocation,
    };

    const errors = validateForm(formData);
    setErrors((prevState) => ({ ...prevState, ...errors }));
    return Object.keys(errors).length === 0;
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
          source={CARD_IMAGES.FORM_IMAGE}
          style={{ width: '100%', height: height / 3.8 }}
          resizeMode="cover"
        />
        <ZonText
          variant="black2"
          fontFamily="bold"
          color="gray800"
          style={[gutters.marginTop_16, gutters.marginLeft_16]}
        >
          Car Wash
        </ZonText>
        <ZonText variant="sub" color="gray600" style={[gutters.marginLeft_16]}>
          Car Washs sdfjlajfasjl
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
          >
            {state?.date || 'select Date'}
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
          Please choose preferred location
        </ZonText>
        {vehicleList.map((item) => {
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
        <ZonButton
          variant="outlined"
          onPress={() => console.log('klkkkk')}
          label="Add new vehicle"
          style={{ width: '90%', alignSelf: 'center', marginVertical: 30 }}
        />
      </ScrollView>
    </SafeScreen>
  );
}

// const AddVehicle = ({
//   setVisible,
//   isVisible,
//   issueId,
//   setSuccessModal,
//   queryClient,
// }: {
//   setVisible: (value: boolean) => void;
//   isVisible: boolean;
//   issueId: string;
//   setSuccessModal: (value: boolean) => void;
// }) => {
//   const { gutters, layout, borders, backgrounds } = useTheme();

//   const [closeComment, setCloseComment] = useState('');
//   const [errors, setErrors] = useState({ closeCommentError: false });

//   const onCloseModal = () => setVisible(false);

//   const validateFormData = (): boolean => {
//     const formData: Record<string, any> = {
//       closeComment,
//     };

//     const errors = validateForm(formData);
//     setErrors((prevErrors) => ({ ...prevErrors, ...errors }));
//     return Object.keys(errors).length === 0;
//   };

//   const onSubmit = async () => {
//     console.log(closeImage);

//     if (validateFormData()) {
//     }
//   };

//   return (
//     <ZonModal
//       isVisible={isVisible}
//       onClose={onCloseModal}
//       variant={'bottom'}
//       containerStyle={{ height: '80%' }}
//       swipeThreshold={50}
//     >
//       <KeyboardAwareScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ flexGrow: 1, backgroundColor: 'Red' }}
//         keyboardShouldPersistTaps="handled"
//         keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
//       >

//         <KorInput
//           variant="description"
//           titleLabel={'Closing comment'}
//           placeholder="Closing comment"
//           value={closeComment}
//           onChangeText={(text) => {
//             setCloseComment(text);
//             setErrors({ ...errors, closeCommentError: false });
//           }}
//           errorLabel="Please enter the close comment"
//           error={errors?.closeCommentError}
//         />

//         <AddImage
//           images={closeImage}
//           setImages={setCloseImage}
//           setVisible={setImageModal}
//           visible={imageModal}
//           // disabled={isEdit && disabledTypes.includes(route?.data?.type)}
//         />

//         <View
//           style={[
//             layout.row,
//             gutters.marginTop_40,
//             gutters.gap_72,
//             layout.absolute,
//             layout.bottom0,
//           ]}
//         >
//           <KorButton
//             disabled={isPending}
//             onPress={() => {
//               onCloseModal();
//             }}
//             label={'Cancel'}
//             variant="outlined"
//             style={[layout.flex_1]}
//           />
//           <KorButton
//             loading={isPending}
//             disabled={isPending}
//             onPress={() => {
//               onSubmit();
//             }}
//             label={'Close'}
//             style={[layout.flex_1, backgrounds.blue]}
//           />
//         </View>
//       </KeyboardAwareScrollView>
//     </Zon>
//   );
// };
