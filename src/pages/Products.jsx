import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { productCategories, products } from '../data/products';
import { Search, Filter, Layers, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync state with URL params if category is clicked from navbar
  React.useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && cat !== activeCategory) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = query === '' || 
        product.name.toLowerCase().includes(query) ||
        product.brandName.toLowerCase().includes(query) ||
        product.chemicalComposition.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.targetCrops.some(crop => crop.toLowerCase().includes(query)) ||
        (product.targetPests && product.targetPests.some(pest => pest.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Helmet>
        <title>Product Catalogue | Hyderabad Crop Science Pvt. Ltd.</title>
        <meta 
          name="description" 
          content="Explore the certified agrochemical catalogue of Hyderabad Crop Science: Insecticides, Fungicides, Herbicides, Plant Growth Regulators, and Fertilizers." 
        />
      </Helmet>

      {/* Page Hero */}
      <PageHero
        eyebrow="PRODUCT CATALOGUE"
        title="Formulations Engineered for Agricultural Defense."
        subtitle="Explore our comprehensive array of approved insecticides, fungicides, herbicides, PGRs, and soil nutrition solutions formulated for Indian farming conditions."
        backgroundImage="/images/products-hero.jpg"
        currentPage="Product Catalogue"
      />

      <section className="py-16 sm:py-20 bg-bg-ivory min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls: Category Filter Tabs & Live Search Bar */}
          <div className="bg-white p-5 sm:p-6 rounded-sm border border-border shadow-soft mb-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 lg:pb-0">
              {productCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3.5 py-2 rounded-sm font-display text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 flex-shrink-0 ${
                    activeCategory === cat.id
                      ? 'bg-forest text-white shadow-soft'
                      : 'bg-bg-soft text-text-primary hover:bg-bg-ivory border border-border/80'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-white text-text-muted border border-border'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Input Bar */}
            <div className="relative min-w-[280px] lg:w-80">
              <input
                type="text"
                placeholder="Search by crop, pest, chemical..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2.5 text-xs font-sans rounded-sm bg-bg-ivory border border-border text-text-primary focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

          {/* Results Summary Counter */}
          <div className="flex items-center justify-between text-xs text-text-muted font-display mb-6 px-1">
            <div>
              Showing <span className="font-bold text-forest">{filteredProducts.length}</span> formulations in{' '}
              <span className="font-semibold text-forest-dark uppercase">
                {productCategories.find(c => c.id === activeCategory)?.name || 'All'}
              </span>
            </div>

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-gold hover:underline font-semibold"
              >
                Clear Search Filter
              </button>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={(p) => setSelectedProduct(p)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-sm border border-border p-12 text-center max-w-lg mx-auto my-12">
              <Search className="w-10 h-10 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-serif font-bold text-forest-dark mb-2">No Matching Products Found</h3>
              <p className="text-xs text-text-muted mb-6">
                We couldn't find any formulation matching your search query "{searchQuery}". Try searching for generic active ingredients like Fipronil, Carbendazim, or target crops like Rice or Cotton.
              </p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="px-4 py-2 bg-forest text-white text-xs font-display font-semibold rounded-sm"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
