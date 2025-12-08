import { Star } from 'lucide-react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Reveal } from '@/components/Reveal';
import { Card } from '@/components/Card';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';

const menuCategories = [
  {
    title: "Entrées / Plats",
    items: [
      { name: "Soupe de poisson", price: "400 DA" },
      { name: "Brick fruits de mer", price: "400 DA" },
      { name: "Brick crevettes", price: "600 DA" },
      { name: "Salade variée (1 pers)", price: "400 DA" },
      { name: "Salade variée (2 pers)", price: "800 DA" },
      { name: "Salade de poulpe", price: "1000 DA" },
      { name: "Hmis", price: "200 DA" },
      { name: "Assiette fromage (1 pers)", price: "500 DA" },
      { name: "Assiette fromage (2 pers)", price: "1000 DA" },
      { name: "Frites maison", price: "300 DA" },
      { name: "Riz", price: "300 DA" },
      { name: "Légumes", price: "400 DA" },
    ]
  },
  {
    title: "Boissons",
    items: [
      { name: "Limonade 1L", price: "250 DA" },
      { name: "Eau plate PM", price: "50 DA" },
      { name: "Eau plate GM", price: "100 DA" },
      { name: "Canette", price: "150 DA" },
      { name: "Jus CM", price: "250 DA" },
      { name: "Jus PM", price: "150 DA" },
      { name: "Eau gazeuse GM", price: "250 DA" },
      { name: "Eau gazeuse PM", price: "150 DA" },
      { name: "Jus pressé Citron / Orange", price: "Sur demande" },
      { name: "Carafe Citron / Orange", price: "Sur demande" },
      { name: "Cocktail Mojito Grenadine (Demi / Carafe)", price: "Sur demande" },
    ]
  },
  {
    title: "Fruits",
    items: [
      { name: "Assiette fruits (1 pers)", price: "500 DA" },
      { name: "Assiette fruits (2 pers)", price: "1000 DA" },
      { name: "Dattes", price: "500 DA" },
      { name: "Assiette fruits royale", price: "2500 DA" },
    ]
  }
];

export default function Menu() {
  return (
    <AuroraBackground showRadialGradient={false}>
      {/* Hero */}
      <section className="section-padding pt-32 pb-16">
        <div className="container-width text-center">
          <Reveal width="100%">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-foreground">
              Notre Menu
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              Découvrez nos créations culinaires et nos spécialités préparées avec passion
            </p>
          </Reveal>
        </div>
      </section>

      {/* Special Dishes Section */}
      <section className="section-padding">
        <div className="container-width">
          {/* Section Title */}
          <div className="text-center mb-16">
            <Reveal width="100%">
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">Nos Plats Spéciaux</h2>
              <p className="text-muted-foreground font-light max-w-2xl mx-auto text-lg">
                Découvrez nos créations signature préparées avec passion et savoir-faire
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: 'Petit Déjeuner Premium',
                description: 'Croissants dorés et pains frais accompagnés de cafés artisanaux préparés avec soin. Un réveil gourmand pour bien commencer la journée.',
                image: product1,
                rating: '4.8',
              },
              {
                title: 'Plat Signature du Chef',
                description: 'Nos créations culinaires préparées avec passion et savoir-faire. Une expérience gastronomique unique qui ravira vos papilles.',
                image: product2,
                rating: '4.9',
              },
              {
                title: 'Desserts Maison',
                description: 'Pâtisseries artisanales et douceurs préparées chaque jour avec des ingrédients de première qualité. La touche sucrée parfaite.',
                image: product3,
                rating: '4.7',
              },
            ].map((dish, index) => (
              <Reveal key={index} delay={index * 0.15} className="h-full">
                <Card className="overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl bg-background/60 backdrop-blur-md group h-full">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      loading="lazy" 
                      src={dish.image} 
                      alt={dish.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-primary/95 backdrop-blur-md text-primary-foreground px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-semibold text-sm">{dish.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4">
                    <h3 className="text-2xl font-serif text-foreground font-semibold">{dish.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed text-base">
                      {dish.description}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="section-padding">
        <div className="container-width">
          {/* Section Title */}
          <div className="text-center mb-16">
            <Reveal width="100%">
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">Menu Complet</h2>
              <p className="text-muted-foreground font-light max-w-2xl mx-auto text-lg">
                Découvrez tous nos plats et boissons avec leurs prix
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {menuCategories.map((category, categoryIndex) => (
              <Reveal key={categoryIndex} delay={categoryIndex * 0.15}>
                <Card className="bg-background/60 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="p-8">
                    <h2 className="text-2xl md:text-3xl font-serif mb-8 text-center text-foreground border-b border-primary/30 pb-4">
                      {category.title}
                    </h2>
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex justify-between items-baseline gap-4 group hover:bg-primary/5 rounded-lg px-4 py-3 transition-all duration-300 border border-transparent hover:border-primary/10"
                        >
                          <span className="text-foreground font-light flex-1 text-base">
                            {item.name}
                          </span>
                          <span className="text-primary font-semibold whitespace-nowrap group-hover:text-primary/80 transition-colors">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
}
