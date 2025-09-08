import { Car } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const carType = defineType({
  name: 'car',
  title: 'خودرو',
  type: 'document',
  icon: Car,
  fields: [
    defineField({
      name: 'title',
      title: 'نام خودرو',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'slug',
      title: 'شناسه URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brand',
      title: 'برند',
      type: 'string',
      options: {
        list: [
          { title: 'BMW', value: 'bmw' },
          { title: 'Mercedes-Benz', value: 'mercedes' },
          { title: 'Audi', value: 'audi' },
          { title: 'Porsche', value: 'porsche' },
          { title: 'Tesla', value: 'tesla' },
          { title: 'Toyota', value: 'toyota' },
          { title: 'Honda', value: 'honda' },
          { title: 'Hyundai', value: 'hyundai' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'model',
      title: 'مدل',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'سال تولید',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .min(1990)
          .max(new Date().getFullYear() + 1),
    }),
    defineField({
      name: 'price',
      title: 'قیمت (تومان)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'mileage',
      title: 'کیلومتر کارکرد',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'fuelType',
      title: 'نوع سوخت',
      type: 'string',
      options: {
        list: [
          { title: 'بنزین', value: 'gasoline' },
          { title: 'دیزل', value: 'diesel' },
          { title: 'هیبرید', value: 'hybrid' },
          { title: 'الکتریکی', value: 'electric' },
          { title: 'گاز', value: 'gas' },
        ],
      },
    }),
    defineField({
      name: 'transmission',
      title: 'نوع گیربکس',
      type: 'string',
      options: {
        list: [
          { title: 'دستی', value: 'manual' },
          { title: 'اتوماتیک', value: 'automatic' },
          { title: 'نیمه اتوماتیک', value: 'semi-automatic' },
        ],
      },
    }),
    defineField({
      name: 'engineSize',
      title: 'حجم موتور (لیتر)',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(10),
    }),
    defineField({
      name: 'horsepower',
      title: 'قدرت موتور (اسب بخار)',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'color',
      title: 'رنگ',
      type: 'string',
    }),
    defineField({
      name: 'condition',
      title: 'وضعیت',
      type: 'string',
      options: {
        list: [
          { title: 'نو', value: 'new' },
          { title: 'کارکرده', value: 'used' },
          { title: 'دست دوم', value: 'second-hand' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'توضیحات',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'images',
      title: 'تصاویر',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'متن جایگزین',
              type: 'string',
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1).max(10),
    }),
    defineField({
      name: 'features',
      title: 'امکانات',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      options: {
        list: [
          { title: 'کولر', value: 'air-conditioning' },
          { title: 'گرمکن', value: 'heater' },
          { title: 'رادیو', value: 'radio' },
          { title: 'بلوتوث', value: 'bluetooth' },
          { title: 'GPS', value: 'gps' },
          { title: 'دوربین دنده عقب', value: 'rear-camera' },
          { title: 'سنسور پارک', value: 'parking-sensor' },
          { title: 'فرمان برقی', value: 'power-steering' },
          { title: 'شیشه برقی', value: 'power-windows' },
          { title: 'قفل مرکزی', value: 'central-lock' },
        ],
      },
    }),
    defineField({
      name: 'isAvailable',
      title: 'موجود است',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'isFeatured',
      title: 'ویژه',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'contactInfo',
      title: 'اطلاعات تماس',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'شماره تلفن',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'ایمیل',
          type: 'string',
        }),
        defineField({
          name: 'location',
          title: 'موقعیت',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      brand: 'brand',
      model: 'model',
      year: 'year',
      media: 'images.0',
    },
    prepare(selection) {
      const { title, brand, model, year } = selection;
      return {
        ...selection,
        subtitle: `${brand} ${model} (${year})`,
      };
    },
  },
});
