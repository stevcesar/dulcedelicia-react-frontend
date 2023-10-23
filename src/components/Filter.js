import { RadioGroup } from '@headlessui/react';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';
import { useState } from 'react';

export default function Filter({
  button,
  categories,
  states,
  tags,
  functions,
}) {
  const [activePublish, setActivePublish] = useState(null);
  const [activeTag, setActiveTag] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  // obtener tags
  const tagsData = tags?.map((tag) => ({
    title: tag?._id,
    value: tag?._id,
  }));

  // obtener categorias
  const CatData = categories?.map((cat) => ({
    title: cat?.name,
    value: cat?._id,
  }));

  const datas = [
    {
      select: states?.tag,
      setSelect: states?.setTag,
      title: 'Tags Populares',
      data: tagsData,
      active: activeTag,
    },
    {
      select: states?.category,
      setSelect: states?.setCategory,
      title: 'Categorías',
      data: CatData,
      active: activeCategory,
    },
  ];

  // activo
  const active = (title) => {
    if (title === 'Published') {
      return activePublish;
    } else if (title === 'Popular Tags') {
      return activeTag;
    } else if (title === 'Category') {
      return activeCategory;
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {datas.map((data) => (
        <div key={data?.title} className="border-b border-deepest pb-8">
          <h3 className="text-md font-medium mb-8 capitalize">{data?.title}</h3>
          <RadioGroup value={data.select} onChange={data.setSelect}>
            <div className="space-y-6">
              {data.data?.map((item) => (
                <RadioGroup.Option key={item?.title} value={item}>
                  <div
                    onClick={() => {
                      if (data?.title === 'Published') {
                        setActivePublish(item?.title);
                      } else if (data?.title === 'Popular Tags') {
                        setActiveTag(item?.title);
                      } else if (data?.title === 'Category') {
                        setActiveCategory(item?.title);
                      }
                    }}
                    className="flex items-center gap-3 w-full cursor-pointer "
                  >
                    {/* icono */}
                    {active(data?.title) === item?.title ? (
                      <MdRadioButtonChecked className="text-main text-lg" />
                    ) : (
                      <MdRadioButtonUnchecked className="text-lg text-gray-500" />
                    )}

                    {/* objeto */}
                    <RadioGroup.Label
                      as="p"
                      className={` text-sm capitalize ${
                        active(data?.title) === item?.title
                          ? 'text-main'
                          : 'text-gray-500'
                      }`}
                    >
                      {item?.title}
                    </RadioGroup.Label>
                  </div>
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      ))}

      {/* limpiar filtro */}
      {button ? (
        <div>
          <button
            onClick={() => functions?.SidebarFilter()}
            className="text-sm mb-2 text-white bg-main w-full rounded py-3"
          >
            Aplicar Filtro
          </button>
          <button
            onClick={() =>
              functions?.clearFilters({
                setActivePublish,
                setActiveTag,
                setActiveCategory,
              })
            }
            className="text-sm border border-main w-full rounded py-3"
          >
            Limpiar Filtro
          </button>
        </div>
      ) : (
        <button
          onClick={() =>
            functions?.clearFilters({
              setActivePublish,
              setActiveTag,
              setActiveCategory,
            })
          }
          className="text-sm text-white bg-main w-full rounded py-3"
        >
          Limpiar Filtro
        </button>
      )}
    </div>
  );
}
